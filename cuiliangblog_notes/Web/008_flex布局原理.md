# flex布局原理
# 一、布局原理
1. flex是flexible Box的缩写，用来为盒状模型提供最大的灵活性，任何一个容器都可以指定为flex布局。
2. 当为父盒子设置为flex布局以后，子元素的float、clear和vertical-align属性将失效。
3. 采用flex布局的元素，称为flex容器，他的所有子元素自动成为容器成员，称为flex项目
4. flex布局原理：通过父盒子添加flex属性，控制子盒子的位置和排列方式

![](https://via.placeholder.com/800x600?text=Image+06a5b126c5496c72)

# 二、flex属性
![](https://via.placeholder.com/800x600?text=Image+7ec322a0b8b77468)

# 三、常见样式设置
| 需求 | 父盒子 | 子盒子 | 效果 |
| --- | --- | --- | --- |
| 水平方向居中 | justify-content: center; |  | ![](https://via.placeholder.com/800x600?text=Image+6c279c263af8b44e) |
| 垂直方向居中 | flex-direction: column;   justify-content: center; |  | ![](https://via.placeholder.com/800x600?text=Image+7be3171bf5ad4c22) |
| 水平垂直方向居中 | flex-direction: column;   justify-content: center;   align-items: center; |  | ![](https://via.placeholder.com/800x600?text=Image+1c42e6154eaeddd5) |
| 左右盒子贴边，中间盒子居中 | justify-content: space-between; |  | ![](https://via.placeholder.com/800x600?text=Image+4d0c51cd96ab4d74) |
| 上线盒子贴边，中间盒子居中 | flex-wrap: wrap;   align-content: space-between; |  | ![](https://via.placeholder.com/800x600?text=Image+c6ea6e07580ce7c4) |
| 上下左右盒子贴边，中间盒子居中 | flex-wrap: wrap;   justify-content: space-between;   align-content: space-between; |  | ![](https://via.placeholder.com/800x600?text=Image+a286543b8c4ff7bb) |
| 两边盒子宽度固定，剩余空间给中间盒子 |  | span:nth-child(1){width: 20px;}   span:nth-child(2){flex:1;}   span:nth-child(3){width: 20px;} | ![](https://via.placeholder.com/800x600?text=Image+bbf3dec0e126f188) |
| 三个盒子比例为1：2：1 |  | span:nth-child(1){flex:1;}   span:nth-child(2){flex:2;}   span:nth-child(3){flex:1;} | ![](https://via.placeholder.com/800x600?text=Image+1ba93c9634a5b3ea) |





