<!-- src/views/Registration.vue -->
<template>
    <div>
        <h1 class="text-2xl font-bold text-center">{{ $t('registration.title') }}</h1>
        <div class="mt-8 space-y-4">
            <p v-for="(item, index) in content" :key="index" class="text-justify text-lg">
                {{ item }}
            </p>
            <!-- 如果有注册二维码，可以在此处添加 -->
            <div class="flex  mt-8">
                <img src='/src/assets/qrcode.png' alt="qrcode" class="w-64 h-64" />
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Registration',
    computed: {
        content() {
            return this.$i18n.messages[this.$i18n.locale].registration.content;
        }
    },
};
</script>
  
<style scoped>
p {
    text-indent: 2em;
}
img {
    /* 缩进 */
    margin-left: 2em;
}
</style>
  