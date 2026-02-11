import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
  state: () => ({
    isDarkMode: true,
    language: 'en' as 'en' | 'es' | 'de'
  }),
  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
    },
    setLanguage(lang: 'en' | 'es' | 'de') {
      this.language = lang
    }
  }
})