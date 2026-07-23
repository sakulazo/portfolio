#!/bin/bash
set -e

REMOTE="vps-manager"
REMOTE_DIR="/srv/portfolio/dist"

if [ -z "$1" ]; then
  echo "Uso: ./deploy.sh \"mensaje del commit\""
  exit 1
fi

# Git
echo "Commiteando cambios..."
git add .
git commit -m "$1"
echo "Push a GitHub..."
git push origin main

# Build
echo "Buildeando..."
pnpm build

# Deploy
echo "Subiendo al VPS..."
tar czf - -C dist . | ssh "$REMOTE" \
  "mkdir -p /tmp/portfolio-deploy && tar xzf - -C /tmp/portfolio-deploy && sudo cp -a /tmp/portfolio-deploy/* $REMOTE_DIR/ && sudo chown -R www-data:www-data $REMOTE_DIR"

echo "Desplegado en https://portfolio.sakulazo.com"
