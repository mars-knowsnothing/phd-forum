<!-- src/App.vue -->
<template>
  <div>
    <!-- 顶部菜单栏 -->
    <nav class="bg-gray-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- 语言切换器 -->
          <div>
            <select v-model="$i18n.locale" class="bg-gray-800 text-white">
              <option value="en">English</option>
              <option value="zh">中文</option>
            </select>
          </div>
        </div>
      </div>
    </nav>

    <!-- Banner 图像 -->
    <div class="relative">
      <img src="./assets/banner.jpg" alt="Banner" class="w-full h-80 object-cover" />
      <!-- 可选：半透明背景层 -->
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <!-- 文字层 -->
      <div class="absolute inset-0 flex items-center justify-center">
        <h1 class="text-white text-3xl md:text-5xl font-bold">{{ $t('home.bannerText') }}</h1>
      </div>
    </div>

    <!-- 选项卡导航 -->
    <div class="bg-white shadow">
      <div class="max-w-7xl mx-auto">
        <div class="flex">
          <router-link v-for="tab in tabs" :key="tab.name" :to="tab.route"
            class="flex-1 py-4 text-center text-gray-700 hover:text-blue-500"
            :class="$route.path === tab.route ? 'border-b-2 border-blue-500 text-blue-500' : ''">
            {{ $t(tab.label) }}
          </router-link>
        </div>
      </div>
    </div>
    <!-- 内容区域 -->

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      tabs: [
        { name: 'Home', route: '/', label: 'tabs.home' },
        { name: 'Schedule', route: '/schedule', label: 'tabs.schedule' },
        { name: 'Registration', route: '/registration', label: 'tabs.registration' },
        { name: 'Fees', route: '/fees', label: 'tabs.fees' },
        { name: 'Contact', route: '/contact', label: 'tabs.contact' },
        { name: 'Venue', route: '/venue', label: 'tabs.venue' },
      ],
    };
  },
};
</script>

<style>
/* 可添加全局样式 */
</style>
