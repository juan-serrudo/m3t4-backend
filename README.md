
# INFRA-TRACK MP

**INFRA-TRACK MP** tiene como objetivo sistematizar el registro de activos tecnológicos y monitorear infraestructura crítica.

---

## 🚀 Descripción General

Este sistema permite:

- 📦 **Inventariar automáticamente activos tecnológicos**, tanto físicos como virtuales (incluyendo Kubernetes, bases de datos, redes, etc.).
- 📊 **Recolectar y visualizar métricas** con herramientas como **Prometheus** y **Grafana**.
- 🧠 **Analizar logs** con **Elasticsearch** y **Kibana** para detectar patrones de falla.
- 🔐 **Verificar integridad de backups** y aplicar políticas de seguridad en tiempo real.
- 🔄 **Integrarse con el Ecosistema del Ministerio Público** de forma segura y trazable.

---

## 🧱 Tecnologías utilizadas

- **NestJS** (modular architecture, CQRS, DDD)
- **TypeORM**
- **SQLite**
- **Prometheus**, **Grafana**, **Kibana**, **Elasticsearch**
- **Docker / Kubernetes**
- **JWT**

---

## 📁 Módulos principales

- `inventory/`: Detección y registro de activos
- `monitoring/`: Recolección de métricas y alertas
- `logs/`: Análisis de logs del sistema
- `backups/`: Control de copias de seguridad
- `reporting/`: Generación de reportes integrados
- `security/`: Gestión de accesos y políticas

---

## 🧠 Arquitectura basada en DDD

El proyecto sigue una estructura de dominio clara con separación entre:

- `domain/`: entidades, eventos, agregados
- `application/`: comandos, handlers, servicios de aplicación
- `infrastructure/`: persistencia, conectores técnicos
- `shared/`: decoradores, utilidades y constantes comunes

---

## 🔒 Seguridad

- Control de acceso basado en roles con JWT
- Rutas públicas controladas con JWT
- Integración con ecosistemas seguros del Ministerio Público

---

## 🚀 Despliegue del Proyecto

Este sistema está preparado para ser desplegado tanto en entornos locales como en producción (por ejemplo, en contenedores Docker o clústeres Kubernetes).

---

### 📦 Requisitos previos

- Node.js v22+
- SQLite

---

### 🔧 Instalación local (modo desarrollo)

```bash
# 1. Clonar el repositorio
git clone https://github.com/juan-serrudo/m3t4-backend.git
cd m3t4-backend

# 2. Instalar dependencias
npm i -g yarn
npm i -g @nestjs/cli

yarn install

# 3. Crear el archivo de entorno
cp .env.example .env

# 5. Ejecutar el servidor
yarn start:dev
```


- En el navegador ir a la siguiente URL: [http://localhost:3000/](http://localhost:3000/)
- La documentación de los servicios se encuentra en: [http://localhost:3000/api](http://localhost:3000/api)

## 👥 Autor

- **Nombre:** Juan Victor Serrudo Chavez
