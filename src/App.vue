<script setup lang="ts">
import Header from '@/components/header/Header.vue'
import NavBar from './components/shared/NavBar.vue'
import About from '@/components/about/AboutMe.vue'
import { useUIStore } from './stores/uiStore'
import { computed } from 'vue'

const uiStore = useUIStore()
const themeClass = computed(() => (uiStore.isDarkMode ? 'dark-theme' : 'light-theme'))
</script>

<template>
  <div :class="themeClass" class="main-wrapper">
    <Header />
    <NavBar />
    <main>
      <About />
      <!-- Projects y Contact se agregarán más tarde -->
    </main>
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Variables CSS para modo claro */
.light-theme {
  --bg-primary: #f5f5f5;
  --bg-secondary: #f1f5f9;
  --text-primary: #1e293b;
  --text-secondary: #111927;
  --accent-color: #3b82f6;
  --border-color: #e2e8f0;
  --shadow-color: rgba(0, 0, 0, 0.1);

  /* Variables específicas para navbar en modo claro */
  --nav-bg: #eeeeee;
  --nav-border: rgba(202, 202, 202, 0.9);
  --nav-text: #e2e8f0;
  --nav-hover: #3b82f6;
  --nav-icon: #e2e8f0;
  --hi-there: #a2c9f8d7;
}

/* Variables CSS para modo oscuro */
.dark-theme {
  --bg-primary: #111927;
  --bg-secondary: #1d273a;
  --text-primary: #f5f5f5;
  --text-secondary: #94a3b8;
  --accent-color: #60a5fa;
  --border-color: #334155;
  --shadow-color: rgba(0, 0, 0, 0.3);

  /* Variables específicas para navbar en modo oscuro */
  --nav-bg: #0a0f1c;
  --nav-border: rgba(15, 23, 42, 0.9);
  --nav-text: #cbd5e1;
  --nav-hover: #60a5fa;
  --nav-icon: #cbd5e1;
  --hi-there: #4678b6;

}

.main-wrapper {
  min-height: 100vh;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

/* Aplicar transición suave a todo el body */
body {
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

/* Opcional: Estilos para scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--accent-color);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--nav-hover);
}
</style>
