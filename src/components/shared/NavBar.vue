<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useUIStore } from '@/stores/uiStore'
import { translations, type Language } from '@/translations'

const uiStore = useUIStore()
const showLangMenu = ref(false)

const languages = [
  { code: 'en' as const, label: 'English', flag: '🇬🇧' },
  { code: 'es' as const, label: 'Español', flag: '🇪🇸' },
  { code: 'de' as const, label: 'Deutsch', flag: '🇩🇪' },
]

const selectLang = (code: Language) => {
  uiStore.setLanguage(code)
  showLangMenu.value = false
}

const closeMenu = (e: MouseEvent) => {
  const target = e.target as HTMLElement

  const isLanguageButton = target.closest('.language-toggle')
  const isInDropdown = target.closest('.lang-dropdown')

  if (!isLanguageButton && !isInDropdown) {
    showLangMenu.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', closeMenu)
})
onUnmounted(() => window.removeEventListener('click', closeMenu))
</script>

<template>
  <div id="container">
    <div class="name-container">
      <span class="name">Carlos Morales</span>
    </div>

    <div class="right-side-actions">
      <nav class="nav-links">
        <a href="#about" class="nav-link">{{ translations[uiStore.language].about }}</a>
        <a href="#personal" class="nav-link">{{ translations[uiStore.language].personal }}</a>
        <a href="#projects" class="nav-link">{{ translations[uiStore.language].projects }}</a>
        <a href="#contact" class="nav-link">{{ translations[uiStore.language].contact }}</a>
      </nav>

      <div class="divider"></div>

      <div class="icon-container">
        <button
          @click="uiStore.toggleDarkMode"
          class="theme-toggle"
          :title="uiStore.isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
        >
          <svg
            v-if="!uiStore.isDarkMode"
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
          </svg>
        </button>

        <div class="language-container">
          <button
            @click="showLangMenu = !showLangMenu"
            class="language-toggle"
            :title="'Idioma actual: ' + uiStore.language.toUpperCase()"
          >
            <span class="lang-text">{{ uiStore.language.toUpperCase() }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M5 8l6 6"></path>
              <path d="M4 14l6-6 2-3"></path>
              <path d="M2 5h12"></path>
              <path d="M22 22l-5-10-5 10"></path>
              <path d="M14 18h6"></path>
            </svg>
          </button>

          <transition name="fade">
            <div v-if="showLangMenu" class="lang-dropdown">
              <div
                v-for="lang in languages"
                :key="lang.code"
                @click="selectLang(lang.code)"
                class="lang-option"
                :class="{ active: uiStore.language === lang.code }"
              >
                <span class="flag">{{ lang.flag }}</span>
                <span class="label">{{ lang.label }}</span>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#container {
  height: 70px;
  background-color: var(--nav-bg);
  border-bottom: 2px solid var(--nav-border);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-sizing: border-box;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.name {
  color: var(--text-secondary);
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
}

.right-side-actions {
  display: flex;
  align-items: center;
  gap: 25px;
}

.nav-links {
  display: flex;
  gap: 25px;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--accent-color);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--accent-color);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.divider {
  width: 1px;
  height: 20px;
  background-color: var(--border-color);
  opacity: 0.5;
}

.icon-container {
  display: flex;
  align-items: center;
  gap: 15px;
}

.theme-toggle,
.language-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.theme-toggle:hover,
.language-toggle:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.theme-toggle:active,
.language-toggle:active {
  transform: translateY(0);
}

.icon {
  width: 20px;
  height: 20px;
  stroke: var(--text-secondary);
  fill: none;
  transition: stroke 0.3s ease;
}

.language-container {
  position: relative;
}

.language-toggle {
  display: flex;
  align-items: center;
  gap: 5px;
}

.lang-text {
  color: var(--text-secondary);
  font-size: 0.8rem;
  font-weight: bold;
  margin-right: 5px;
}

.lang-dropdown {
  position: absolute;
  top: calc(100% + 5px);
  right: 0;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  box-shadow: 0 10px 25px -5px var(--shadow-color);
  min-width: 150px;
  overflow: hidden;
  z-index: 1001;
  backdrop-filter: blur(10px);
}

.lang-option {
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-secondary);
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.lang-option:hover {
  background-color: rgba(255, 255, 255, 0.1);
  padding-left: 20px;
}

.lang-option.active {
  background-color: rgba(59, 130, 246, 0.2);
  color: var(--accent-color);
  font-weight: 600;
}

.flag {
  font-size: 1.2rem;
}

.label {
  flex: 1;
}

/* Animación Fade */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Asegurar que el dropdown esté encima de otros elementos */
.language-container {
  z-index: 1002;
}

@media (max-width: 768px) {
  .nav-links,
  .divider {
    display: none;
  }

  #container {
    padding: 0 20px;
  }

  .right-side-actions {
    gap: 15px;
  }
}
</style>
