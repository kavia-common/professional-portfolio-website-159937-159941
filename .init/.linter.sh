#!/bin/bash
cd /home/kavia/workspace/code-generation/professional-portfolio-website-159937-159941/portfolio_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

