import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject('LOCAL_STORAGE') private localStorage: Storage) { }

  // Guardar un valor en localStorage
  setItem(key: string, value: any): void {
    this.localStorage.setItem(key, JSON.stringify(value));
  }

  // Obtener un valor de localStorage
  getItem(key: string): any {
    const value = this.localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  // Eliminar un valor de localStorage
  removeItem(key: string): void {
    this.localStorage.removeItem(key);
  }

  // Limpiar todos los valores en localStorage
  clear(): void {
    this.localStorage.clear();
  }
}
