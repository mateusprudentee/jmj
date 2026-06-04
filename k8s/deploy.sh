#!/bin/bash
# deploy.sh - Script para deploy no Kubernetes

echo "🚀 Iniciando deploy do Task Manager no Kubernetes..."

# Criar namespace
kubectl create namespace task-manager

# Aplicar todos os recursos
kubectl apply -k k8s/

# Aguardar pods ficarem prontos
echo "⏳ Aguardando pods ficarem prontos..."
kubectl wait --for=condition=ready pod --all -n task-manager --timeout=300s

# Verificar status
echo "📊 Status dos deployments:"
kubectl get deployments -n task-manager

echo "📊 Status dos pods:"
kubectl get pods -n task-manager

echo "📊 Status dos serviços:"
kubectl get svc -n task-manager

echo "✅ Deploy concluído!"
echo "🌐 Acesse a aplicação: http://localhost:80"
echo "📝 Para ver os logs: kubectl logs -f -n task-manager deployment/frontend"
