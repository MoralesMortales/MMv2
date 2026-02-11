<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-label">About Me</h2>
        <p class="section-description">
          I'm a passionate developer with 5+ years of experience building web applications. 
          When I'm not coding, you'll find me exploring new coffee shops, reading tech blogs, 
          or contributing to open-source projects.
        </p>
      </div>

      <div class="features-grid">
        <div v-for="(feature, index) in features" :key="index" class="feature-card">
          <div class="feature-icon" v-html="feature.icon"></div>
          <h3 class="feature-name">{{ feature.title }}</h3>
          <p class="feature-text">{{ feature.text }}</p>
        </div>
      </div>

      <div class="tech-container">
        <h3 class="tech-section-title">Technologies I Work With</h3>
        
        <div class="categories-wrapper">
          <div v-for="(cat, key) in techStore.stack" :key="key" class="category-group">
            <h4 class="category-label">{{ cat.label }}</h4>
            <div class="tech-grid">
              <div 
                v-for="tech in cat.items" 
                :key="tech.name" 
                class="tech-card"
                :class="{ 'is-active': techStore.activeTech === tech.name }"
                @click="techStore.handleTechClick(tech.name)"
              >
                <img :src="tech.logo" :alt="tech.name" :class="{ 'dark-inv': tech.invert }" class="tech-img" />
                <span class="tech-name">{{ tech.name }}</span>
                
                <div v-if="techStore.activeTech === tech.name" class="click-ring"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTechStore } from '@/stores/aboutStore';

const techStore = useTechStore();

const features = ref([
  {
    title: 'Clean Code',
    text: 'Writing maintainable, scalable code that makes sense to humans.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
  },
  {
    title: 'Design Mindset',
    text: 'Creating interfaces that are both beautiful and intuitive.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>`
  },
  {
    title: 'Fast Learner',
    text: 'Always exploring new technologies and best practices.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path></svg>`
  },
  {
    title: 'Team Player',
    text: 'Collaborating effectively to build amazing products together.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path></svg>`
  }
]);
</script>

<style scoped>
.about-section {
  padding: 100px 20px;
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin-bottom: 20px;
}

.section-description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
}

/* Features */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 25px;
  margin-bottom: 100px;
}

.feature-card {
  background: var(--bg-primary);
  padding: 40px 30px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px var(--shadow-color);
}

.feature-card:hover {
  transform: translateY(-8px);
  border-color: var(--accent-color);
  box-shadow: 0 12px 30px var(--shadow-color);
}

.feature-icon {
  color: var(--accent-color);
  margin-bottom: 25px;
}

.feature-name {
  font-size: 1.3rem;
  margin-bottom: 15px;
  font-weight: 600;
  color: var(--text-primary);
}

.feature-text {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Tech Section */
.tech-section-title {
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 50px;
  font-size: 1.1rem;
}

.categories-wrapper {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.category-label {
  color: var(--accent-color);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.category-label::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border-color);
  opacity: 0.3;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.tech-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--bg-primary);
  padding: 14px 22px;
  border-radius: 12px;
  cursor: pointer;
  border: 1px solid var(--border-color);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px var(--shadow-color);
}

.tech-card:hover {
  background: var(--bg-secondary);
  border-color: var(--accent-color);
  transform: translateY(-2px);
}

.tech-card.is-active {
  border-color: var(--accent-color);
  background: rgba(59, 130, 246, 0.1);
  transform: scale(0.96);
}

.tech-img {
  width: 24px;
  height: 24px;
  transition: filter 0.3s ease;
}

/* Ajustar el filtro para modo oscuro si es necesario */
.dark-theme .tech-img {
  filter: brightness(0.9);
}

.dark-inv {
  filter: brightness(0) invert(1);
}

.tech-name {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-primary);
}

/* Animación del anillo al click */
.click-ring {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  border: 2px solid var(--accent-color);
  border-radius: 12px;
  animation: ring-pulse 0.8s ease-out forwards;
}

@keyframes ring-pulse {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(1.4); opacity: 0; }
}

/* Responsive */
@media (max-width: 768px) {
  .about-section {
    padding: 60px 20px;
  }
  
  .section-header {
    margin-bottom: 60px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    margin-bottom: 60px;
  }
  
  .tech-grid { 
    justify-content: center; 
  }
  
  .section-description { 
    font-size: 1.1rem; 
  }
  
  .feature-card {
    padding: 30px 20px;
  }
}

@media (max-width: 480px) {
  .about-section {
    padding: 40px 15px;
  }
  
  .tech-card {
    padding: 12px 18px;
    font-size: 0.9rem;
  }
  
  .tech-img {
    width: 20px;
    height: 20px;
  }
  
  .section-label {
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
  }
}
</style>