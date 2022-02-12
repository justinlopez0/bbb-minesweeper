<script lang="ts">
  import { onMount } from "svelte";
  
  let chatInput;
  let messages: string[] = [];

  onMount(async () => {
    
  

  });

  function keyup(e) {
    if (e.keyCode !== 13 || !chatInput.trim()) return;
    chatInput = "";
  }
</script>

<div class="chat">
  <div class="messages" on:change={() => {}}>
    {#each messages as msg}
      <p>{msg}</p>
    {/each}
  </div>
  <input bind:value={chatInput} type="text" id="chat-input" on:keyup={keyup} />
</div>

<style>
  .messages {
    padding: 10px 20px 0 20px;
    overflow-y: scroll;
    color: #ddca7e;

    overflow-y: auto;
    scrollbar-width: auto;
    scrollbar-color: #1a1a1a;
  }
  /* ===== Scrollbar CSS ===== */
  /* Chrome, Edge, and Safari */
  .messages::-webkit-scrollbar {
    width: 16px;
  }

  .messages::-webkit-scrollbar-thumb {
    background-color: #212121;
    border-radius: 10px;
    border: 0px none #ffffff;
  }
  .chat {
    background-color: #2b2b2b;
    height: 240px;
    margin-top: auto;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #1a1a1a;
  }

  input {
    margin-top: auto;
    margin-left: 10px;
    margin-right: 10px;
    background-color: #222222;
    color: #ddca7e;
    border-radius: 5px;
  }
</style>
