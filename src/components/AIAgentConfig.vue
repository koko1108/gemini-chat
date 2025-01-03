<script setup>
import { ref } from "vue";
import { generateRandomName, generateRandomDescription } from "../utils/random";

const agent1 = ref({ name: "", description: "" });
const agent2 = ref({ name: "", description: "" });
const emit = defineEmits(["start-conversation"]);

const startConversation = () => {
  if (
    agent1.value.name === "" ||
    agent1.value.description === "" ||
    agent2.value.name === "" ||
    agent2.value.description === ""
  )
    return;
  emit("start-conversation", { agent1: agent1.value, agent2: agent2.value });
};

const generateRandomAgents = async () => {
    agent1.value.name = await generateRandomName();
    agent1.value.description = await generateRandomDescription();
    agent2.value.name = await generateRandomName();
    agent2.value.description = await generateRandomDescription();
};
</script>

<template>
  <div class="flex flex-col items-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-4/5">
      <div className="flex flex-col gap-4">
        <h2 className="text-5xl font-bold">AI角色 1</h2>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">名稱</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full"
            id="agent1Name"
            v-model="agent1.name"
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">描述</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            id="agent1Description"
            v-model="agent1.description"
          ></textarea>
        </label>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-5xl font-bold">AI角色 2</h2>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">名稱</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full"
            id="agent2Name"
            v-model="agent2.name"
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">描述</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            id="agent2Description"
            v-model="agent2.description"
          ></textarea>
        </label>
      </div>
    </div>
    <div class="flex gap-2 mt-5">
      <button @click="generateRandomAgents" class="btn btn-accent btn-wide">
        隨機生成
      </button>
      <button @click="startConversation" class="btn btn-info btn-wide">
        開始對話
      </button>
    </div>
  </div>
</template>

<style scoped></style>
