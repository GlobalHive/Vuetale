import { NATIVE } from '../types/global';
import { defineComponent } from 'vue';
export declare function createPrefabComponent<K extends keyof NATIVE, T extends NATIVE[K]>(_origin: string, name: string, type: K): ReturnType<typeof defineComponent>;
