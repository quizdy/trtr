<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row class="d-flex align-center justify-center" width="400">
          <v-col>
            <v-text-field v-model="message"></v-text-field>
          </v-col>
          <v-col>
            <v-btn @click="sendMsg">send</v-btn>
          </v-col>
        </v-row>
        <v-row width="400">
          <v-col>
            <div v-html="recieve"></div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const { $socket } = useNuxtApp();
const message = ref("");
const recieve = ref("");

const sendMsg = () => {
  $socket.emit("msg", message.value);
};

onMounted(() => {
  $socket.on("msg", (msg: any) => {
    recieve.value = recieve.value + "<br />" + msg;
  });
});

onBeforeUnmount(() => {
  if ($socket) {
    alert("disconnect");
    $socket.close();
  }
});
</script>

<style scoped lang="scss"></style>
