<template>
  <section id="interests" class="interests-section">
    <div class="container">
      <!-- Header -->
      <div class="section-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <h2 class="section-title">{{ t.interestsTitle }}</h2>
        <p class="section-description">
          {{ t.interestsDescription }}
        </p>
      </div>

      <!-- Interests Grid -->
      <div class="interests-grid">
        <div v-for="(interest, index) in interestsList" :key="index" class="interest-card">
          <div class="interest-icon" v-html="interest.icon"></div>
          <h3 class="interest-title">{{ interest.title }}</h3>
          <p class="interest-description">{{ interest.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useUIStore } from '@/stores/uiStore';
import { translations, type Language } from '@/translations';

const uiStore = useUIStore();
const t = computed(() => translations[uiStore.language as Language] || translations.en);

const interestsList = computed(() => [
  {
    title: t.value.reading,
    description: t.value.readingDesc,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`
  },
  {
    title: t.value.music,
    description: t.value.musicDesc,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`
  },
  {
    title: t.value.travel,
    description: t.value.travelDesc,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.9.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
</svg>`
  },
  {
    title: t.value.exercise,
    description: t.value.exerciseDesc,
icon: `
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="32" viewBox="0 0 32 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M6 7.5h-2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h2"></path>
  <path d="M6 5h2v14H6z"></path>
  
  <path d="M8 12h16"></path>
  
  <path d="M24 5h2v14h-2z"></path>
  <path d="M26 7.5h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
</svg>
`
},
  {
    title: t.value.languageLearning,
    description: t.value.languageLearningDesc,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8l6 6"></path><path d="M4 14l6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="M22 22l-5-10-5 10"></path><path d="M14 18h6"></path></svg>`
  },
  {
    title: t.value.openSource,
    description: t.value.openSourceDesc,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`
  }
]);
</script>

<style scoped>
.icon{
    width: 40px;
    height: 40px;
    color: var(--accent-color);
    margin-bottom: 20px;
}
.interests-section {
  padding: 100px 20px;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin-bottom: 20px;
}

.section-description {
  font-size: 1.3rem;
  line-height: 1.6;
  color: var(--text-primary);
  max-width: 700px;
  margin: 0 auto;
}

/* Interests Grid */
.interests-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
}

.interest-card {
  background: var(--bg-primary);
  padding: 35px 25px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px var(--shadow-color);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.interest-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--accent-color), #a855f7);
  transform: scaleX(0);
  transition: transform 0.3s ease;
  transform-origin: left;
}

.interest-card:hover {
  transform: translateY(-8px);
  border-color: var(--accent-color);
  box-shadow: 0 12px 30px var(--shadow-color);
}

.interest-card:hover::before {
  transform: scaleX(1);
}

.interest-icon {
  color: var(--accent-color);
  margin-bottom: 25px;
  transition: all 0.3s ease;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.interest-card:hover .interest-icon {
  transform: scale(1.1);
  color: #a855f7;
}

.interest-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: var(--text-primary);
  position: relative;
  display: inline-block;
}

.interest-title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 2px;
  background: var(--accent-color);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.interest-card:hover .interest-title::after {
  width: 50px;
}

.interest-description {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
}

/* Responsive */
@media (max-width: 1024px) {
  .interests-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .interests-section {
    padding: 60px 20px;
  }
  
  .section-description {
    font-size: 1.1rem;
  }
  
  .interests-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .interest-card {
    padding: 30px 20px;
  }
  
  .interest-icon {
    width: 40px;
    height: 40px;
  }
  
  .interest-title {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .interests-section {
    padding: 40px 15px;
  }
  
  .section-title {
    font-size: 0.8rem;
  }
  
  .section-description {
    font-size: 1rem;
  }
  
  .interest-icon {
    width: 36px;
    height: 36px;
  }
  
  .interest-title {
    font-size: 1.1rem;
  }
  
  .interest-description {
    font-size: 0.9rem;
  }
}
</style>