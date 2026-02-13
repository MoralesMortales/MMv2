<template>
  <section id="languages" class="languages-section">
    <div class="container">
      <!-- Header -->
      <div class="section-header">
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
        <h2 class="section-title">{{ t.languagesTitle }}</h2>
        <p class="section-description">
          {{ t.languagesDescription }}
          <span class="highlight">{{ t.worldwide }}</span>
        </p>
      </div>

      <!-- Languages Grid -->
      <div class="languages-grid">
        <div v-for="(lang, index) in languagesList" :key="index" class="language-card">
          <div class="flag-icon">{{ lang.flag }}</div>
          <h3 class="language-name">{{ lang.name }}</h3>
          <div class="level-indicator">
            <span class="level-badge" :class="lang.levelClass">{{ lang.level }}</span>
          </div>
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

const languagesList = computed(() => [
  {
    flag: '🇪🇸',
    name: t.value.spanish,
    level: t.value.native,
    levelClass: 'native',
    description: t.value.native
  },
  {
    flag: '🇬🇧',
    name: t.value.english,
    level: t.value.advanced,
    levelClass: 'advanced',
    description: t.value.advanced
  },
  {
    flag: '🇩🇪',
    name: t.value.german,
    level: t.value.intermediate,
    levelClass: 'intermediate',
    description: t.value.intermediate
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
.languages-section {
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

.highlight {
  color: var(--accent-color);
  font-weight: 600;
  position: relative;
  display: inline-block;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--accent-color), transparent);
  border-radius: 2px;
}

/* Languages Grid */
.languages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
}

.language-card {
  background: var(--bg-primary);
  padding: 40px 30px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px var(--shadow-color);
  position: relative;
  overflow: hidden;
}

.language-card::before {
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

.language-card:hover {
  transform: translateY(-8px);
  border-color: var(--accent-color);
  box-shadow: 0 12px 30px var(--shadow-color);
}

.language-card:hover::before {
  transform: scaleX(1);
}

.flag-icon {
  font-size: 3.5rem;
  margin-bottom: 20px;
  filter: drop-shadow(0 4px 8px var(--shadow-color));
  transition: transform 0.3s ease;
}

.language-card:hover .flag-icon {
  transform: scale(1.1);
}

.language-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: var(--text-primary);
}

.level-indicator {
  margin-bottom: 4px;
  margin-top: 34px;
}

.level-badge {
  display: inline-block;
  padding: 6px 16px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.level-badge.native {
  background: linear-gradient(135deg, #22c55e20, #16a34a20);
  color: #22c55e;
  border: 1px solid #22c55e40;
}

.level-badge.advanced {
  background: linear-gradient(135deg, #3b82f620, #2563eb20);
  color: #3b82f6;
  border: 1px solid #3b82f640;
}

.level-badge.intermediate {
  background: linear-gradient(135deg, #eab30820, #ca8a0420);
  color: #eab308;
  border: 1px solid #eab30840;
}

.level-description {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-top: 8px;
  font-weight: 500;
}

/* Dark mode adjustments */
.dark-theme .level-badge.native {
  background: linear-gradient(135deg, #22c55e20, #16a34a20);
  color: #4ade80;
  border-color: #22c55e60;
}

.dark-theme .level-badge.advanced {
  background: linear-gradient(135deg, #3b82f620, #2563eb20);
  color: #60a5fa;
  border-color: #3b82f660;
}

.dark-theme .level-badge.intermediate {
  background: linear-gradient(135deg, #eab30820, #ca8a0420);
  color: #facc15;
  border-color: #eab30860;
}

/* Responsive */
@media (max-width: 1024px) {
  .languages-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .languages-section {
    padding: 60px 20px;
  }
  
  .section-description {
    font-size: 1.1rem;
  }
  
  .languages-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .language-card {
    padding: 30px 20px;
  }
  
  .flag-icon {
    font-size: 3rem;
  }
  
  .language-name {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .languages-section {
    padding: 40px 15px;
  }
  
  .section-title {
    font-size: 0.8rem;
  }
  
  .section-description {
    font-size: 1rem;
  }
  
  .flag-icon {
    font-size: 2.5rem;
  }
  
  .level-badge {
    padding: 4px 12px;
    font-size: 0.8rem;
  }
}
</style>