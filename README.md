## 一、技术栈

### 1、`nextjs`

https://www.nextjs.cn/docs/getting-started

约定式路由

### 2、`tailwind`

https://tailwindcss.com/

`nextjs`官方脚手架也支持`scss`和`css-in-js`，但是为了项目风格统一，推荐优先用`tailwind`，有些`tailwind`无法实现的效果可以用`scss`和`css-in-js`

`tailwind.config.js`中定义了全局主题色`themeGreen`，可以用`text-themeGreen` `bg-themeGreen`之类进行使用

`tailwind`同时引入了`@tailwindcss/line-clamp` 插件，可以直接使用`line-clamp-n`来指定`n`行文本省略

### 3、`next-i18next`国际化

https://github.com/isaachinman/next-i18next

`next-i18next`基于`i18next`和`react-i18next`进一步封装，支持`SSG`和`SSR`

注意`react-i18next`的多`namespace`概念

```typescript
  // useTranslation可以引入多个namespace，然后t方法调用的时候设置ns参数指定namespace,如果不传，默认指向第一个
  const { t } = useTranslation(['menu', 'common']);
```

### 4、`next-seo`进行`page seo`

`page`中如此使用，注意国际化

```typescript
<NextSeo
	title={t('404_PAGE_SEO_TITLE')}
    description={t('404_PAGE_SEO_DESC')}
/>
```

### 5、`store2`进行`localstorage`管理

https://github.com/nbubna/store

### 6、`lodash`

https://www.lodashjs.com/

`js`通用函数类库

### 7、`react-use`

https://github.com/streamich/react-use

通用`hooks`库，常用的有`useWindowSize` `useClickAway` 等

### 8、`baseui`

https://baseweb.design/

基础组件库

### 9、`next-themes`

https://github.com/pacocoursey/next-themes

亮暗主题切换，一阶段不做

### 10、全局`css`类

`.container` 页面的通用布局

`.resetContainer` 页面中的某个`section`要重置宽度，宽度占满屏幕设置`bg`，可以添加此类

### 11、图标库

`ant-design icons`和`iconfont`

### 12、网络请求

`axios`

### 13、包管理

统一使用`yarn`
