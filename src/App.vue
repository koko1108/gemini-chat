<script setup>
import { ref } from "vue";
import AIAgentConfig from "./components/AIAgentConfig.vue";
import { generateContent } from "./utils/gemini";
import { twMerge } from "tailwind-merge";

const conversation = ref([]);
const isConversationRunning = ref(false);
const agents = ref({});
const context = ref("他們正在聊天");

const handleStartConversation = async (agentsData) => {
  console.log("agents", agentsData);
  agents.value = agentsData;
  conversation.value = [];
  isConversationRunning.value = true;
  let currentSpeaker = "agent1";
  const { agent1, agent2 } = agentsData;
  try {
    while (isConversationRunning.value) {
      const prompt = `
        ${agent1.name}的描述:${agent1.description}
            ${agent2.name}的描述:${agent2.description}
            ${currentSpeaker === 'agent1' ? agent1.name : agent2.name}現在要說話, 請回傳下一句話, 請注意回傳的格式為 "回覆內容"
            請不要有其他多餘的文字
            目前對話內容:
            ${conversation.value.map(msg => `${msg.sender}:${msg.text}`).join('\n')}
            `;
      const response = await generateContent(prompt);
      conversation.value.push({
        sender: currentSpeaker === "agent1" ? agent1.name : agent2.name,
        text: response,
      });
      currentSpeaker = currentSpeaker === "agent1" ? "agent2" : "agent1";
    }
  } catch (error) {
    console.error("Error generating conversation:", error);
  }
};

// 停止對話
const stopConversation = () => {
  isConversationRunning.value = false;
};
</script>

<template>
  <div class="container mx-auto p-4">
    <AIAgentConfig @start-conversation="handleStartConversation" />
    <div class="mt-4 w-4/5 mx-auto">
      <div v-if="conversation.length > 0">
        <div
          v-for="(message, index) in conversation"
          :key="index"
          :class="twMerge('chat', index % 2 === 0 ? 'chat-start' : 'chat-end')"
        >
          <div className="chat-header">
            {{ message.sender }}
          </div>
          <div className="chat-bubble">
            {{ message.text }}
          </div>
        </div>
      </div>
      <div v-if="isConversationRunning">
        <span className="loading loading-spinner loading-lg block"></span>
        <button @click="stopConversation" class="btn btn-error mt-4 mx-auto">
          停止對話
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
