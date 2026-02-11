<script setup lang="ts">
import { computed } from 'vue'
import { useUIStore } from '@/stores/uiStore'
import { translations, type Language } from '@/translations'
import profilePhoto from '@/assets/photoProf.jpeg'; 

const uiStore = useUIStore();
const t = computed(() => translations[uiStore.language as Language] || translations.en);
</script>

<template>
  <div id="header-container">
    <div class="hero-content">
      <div class="profile-wrapper">
        <img :src="profilePhoto" alt="Profile" class="profile-img" />
      </div>

      <div class="greeting-badge">
        <span>{{ t.greeting }}</span>
      </div>

      <h1 class="hero-title">I'm Carlos Morales</h1>

      <p class="hero-description">
        {{ t.description }}
      </p>

      <div class="cta-container">
        <button class="btn btn-primary">{{ t.btnWork }}</button>
        <button class="btn btn-secondary">{{ t.btnContact }}</button>
      </div>

      <div class="social-links">
        <i class="fab fa-github"></i>
        <i class="fab fa-linkedin"></i>
        <i class="fas fa-envelope"></i>
      </div>

      <div class="scroll-down">
        <i class="fas fa-arrow-down"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
#header-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: all 0.5s ease;
  padding: 0 20px;
  background: radial-gradient(circle at center, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  color: var(--text-primary);
}

.hero-content {
  max-width: 700px;
}

.profile-wrapper {
  width: 160px; height: 160px;
  border-radius: 50%;
  margin: 0 auto 25px auto;
  animation: pulse 3s ease-out infinite alternate;
}

@keyframes pulse {
  0% { box-shadow: 0 0 20px 2px var(--accent-color); }
  100% { box-shadow: 0 0 50px 2px var(--accent-color); }
}

.profile-img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }

.greeting-badge {
  background-color: var(--hi-there);
  color: var(--text-primary);
  font-weight: bold;
  padding: 8px 20px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 20px;
}

.hero-title { 
  font-size: 2.5rem; 
  font-weight: 700; 
  margin-bottom: 20px;
  color: var(--text-primary);
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 35px;
}

.cta-container { 
  display: flex; 
  gap: 15px; 
  justify-content: center; 
  margin-bottom: 40px; 
}

.btn { 
  padding: 12px 28px; 
  border-radius: 8px; 
  font-weight: 600; 
  cursor: pointer; 
  border: none; 
  transition: 0.3s ease;
}

.btn-primary { 
  background: linear-gradient(90deg, var(--accent-color),#a855f7); 
  color: white; 
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
}

.btn-secondary { 
  background-color: var(--border-color); 
  color: var(--text-primary);
}

.btn-secondary:hover {
  background-color: var(--text-secondary);
  transform: translateY(-2px);
}

.social-links { 
  display: flex; 
  gap: 25px; 
  justify-content: center; 
  font-size: 1.5rem; 
  color: var(--text-secondary); 
  margin-bottom: 30px; 
}

.social-links i {
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-links i:hover {
  color: var(--accent-color);
  transform: scale(1.1);
}

.scroll-down { 
  color: var(--text-secondary); 
  animation: bounce 2s infinite; 
  cursor: pointer;
}

@keyframes bounce { 
  0%, 100% {transform: translateY(0);} 
  50% {transform: translateY(-10px);} 
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .cta-container {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 250px;
  }
}
</style>