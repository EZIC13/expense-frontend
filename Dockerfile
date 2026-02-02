# ---- Build stage ----
FROM node:20-alpine AS builder

WORKDIR /app

# 👇 Accept build-time variable
ARG VITE_BACKEND_API
ENV VITE_BACKEND_API=$VITE_BACKEND_API

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- Production stage ----
FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]