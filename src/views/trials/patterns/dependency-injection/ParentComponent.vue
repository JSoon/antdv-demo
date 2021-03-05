<template>
  <div class="parent-component">
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    console.log(this.ipInfo);
    return {
      ipInfo: this.ipInfo,
    };
  },
  data() {
    return {
      ipInfo: {},
    };
  },
  watch: {
    ipInfo: {
      handler(val) {
        console.log(val);
      },
    },
  },
  created() {
    this.getIpInfo();
  },
  methods: {
    getIpInfo() {
      const client = new XMLHttpRequest();
      client.open('GET', 'http://ip-api.com/json/103.122.119.183', true);
      client.setRequestHeader('Content-Type', 'application/json');
      client.responseType = 'json';
      client.onreadystatechange = () => {
        // In local files, status is 0 upon success in Mozilla Firefox
        if (client.readyState === XMLHttpRequest.DONE) {
          const { status } = client;
          if (status === 0 || (status >= 200 && status < 400)) {
            // The request has been completed successfully
            console.log(client);
            Object.entries(client.response).forEach(([k, v]) => this.$set(this.ipInfo, k, v));
          } else {
            // Oh no! There has been an error with the request!
          }
        }
      };
      client.send();
    },
  },
};
</script>

<style>

</style>
