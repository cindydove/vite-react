### vite项目构建

1. 配置别名

`vite.config.ts`
```json
resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
```
`tsconfig.json`
```json
{
  "compilerOptions": {
    ... , //  其他配置
    "baseUrl": "src",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["./src"]
}
```

