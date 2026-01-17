# flex父项属性
# 一、flex-direction（主轴的方向）
1. 主轴和侧轴是变化的，当flex-direction设置主轴后，剩下的就是侧轴，子元素跟着主轴来排列

| 属性值 | 说明 | 效果 |
| --- | --- | --- |
| row | 从左到右（默认） | ![img_4208.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_4208.png) |
| row-reverse | 从右到左 |  |
| column | 从上到下 | ![img_3280.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3280.png) |
| column-reverse | 从下到上 |  |


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>flex布局</title>
    <style>
        div{
            display: flex;
            width: 300px;
            height: 100px;
            background-color: skyblue;
            /*从左到右排列*/
            /*flex-direction: row;*/
            /*从右到左排列*/
            /*flex-direction: row-reverse;*/
            /*从上到下排列*/
            /*flex-direction: column;*/
            /*从下到上排列*/
            flex-direction: column-reverse;
        }
        div span{
            width: 50px;
            height: 50px;
            background-color: pink;
            margin-right: 10px;
            border: 3px black solid;
        }
    </style>
</head>
<body>
<div>
    <span>1</span>
    <span>2</span>
    <span>3</span>
</div>
</body>
</html>
```

# 二、justify-content（主轴上的子元素排列方式）
1. 设置在主轴上的对齐方式

| 属性 | 说明 | 效果 |
| --- | --- | --- |
| flex-start | 从头开始，如果主轴x轴，则从左到右(默认值) | ![img_3312.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3312.png) |
| flex-end | 从尾部开始排列 |  |
| center | 在主轴居中对齐 |  |
| space-around | 平分剩余空间 |  |
| space-between | 两边贴边，平分剩余空间 | ![img_2032.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_2032.png) |


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>flex布局</title>
    <style>
        div{
            display: flex;
            width: 300px;
            height: 100px;
            background-color: skyblue;
            /*主轴从头开始排列*/
            /*justify-content: flex-start;*/
            /*主轴从尾部开始排列*/
            /*justify-content: flex-end;*/
            /*主轴居中对齐*/
            /*justify-content: center;*/
            /*主轴子元素平分剩余空间*/
            /*justify-content: space-around;*/
            /*主轴子元素两边贴边，然后平分剩余空间*/
            justify-content: space-between;
        }
        div span{
            width: 50px;
            height: 50px;
            background-color: pink;
            border: 3px black solid;
        }
    </style>
</head>
<body>
<div>
    <span>1</span>
    <span>2</span>
    <span>3</span>
</div>
</body>
</html>
```

# 三、flex-wrap（子元素是否换行）
1. 默认情况下，所有子盒子都排列在一条线上，默认不换行

| 属性 | 说明 | 效果 |
| --- | --- | --- |
| nowarp | 不换行（默认） |  |
| warp | 换行 | ![img_4784.jpeg](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_4784.jpeg) |


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>flex布局</title>
    <style>
        div{
            display: flex;
            width: 250px;
            height: 150px;
            background-color: skyblue;
            /*子盒子超出时不换行*/
            flex-wrap:nowrap;
            /*子盒子超出时换行*/
            /*flex-wrap:wrap;*/
        }
        div span{
            width: 50px;
            height: 50px;
            background-color: pink;
            border: 3px black solid;
        }
    </style>
</head>
<body>
<div>
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
    <span>6</span>
</div>
</body>
</html>
```

# 四、align-items（侧轴上的子元素排列方式-单行）
1. 控制子盒子在侧轴上的排列方式，子盒子为单行时使用

| 属性值 | 说明 | 效果 |
| --- | --- | --- |
| flex-start | 从上到下(默认) | ![img_3248.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3248.png) |
| flex-end | 从下到上 |  |
| center | 侧轴居中 | ![img_352.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_352.png) |
| stretch | 拉伸(不要给子盒子设置高度) | ![img_4032.jpeg](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_4032.jpeg) |


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>flex布局</title>
    <style>
        div{
            display: flex;
            width: 250px;
            height: 150px;
            background-color: skyblue;
            /*侧轴从上到下排列*/
            /*align-items: flex-start;*/
            /*侧轴从下到上排列*/
            /*align-items: flex-end;*/
            /*侧轴居中排列*/
            /*align-items: center;*/
            /*侧轴拉伸*/
            align-items: stretch;
        }
        div span{
            width: 50px;
            /*height: 50px;*/
            background-color: pink;
            border: 3px black solid;
        }
    </style>
</head>
<body>
<div>
    <span>1</span>
    <span>2</span>
    <span>3</span>
</div>
</body>
</html>
```

# 五、align-content（侧轴上的子元素排列方式-多行）
1. 控制子盒子在侧轴上的排列方式，子盒子为多行时使用,记得设置<font style="color:#bababa;">flex-wrap</font>: <font style="color:#a5c261;">wrap（换行排列）</font>

| 属性值 | 说明 | 效果 |
| --- | --- | --- |
| flex-start | 从上到下（默认） |  |
| flex-end | 从下到上 |  |
| center | 居中 |  |
| space-between | 两边贴边，平分剩余空间 |  |
| stretch | 拉伸（子盒子不要给高度） | ![img_3376.jpeg](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_3376.jpeg) |


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>flex布局</title>
    <style>
        div{
            display: flex;
            width: 250px;
            height: 150px;
            background-color: skyblue;
            /*换行排列*/
            flex-wrap: wrap;
            /*侧轴从上到下排列*/
            /*align-content: flex-start;*/
            /*侧轴从下到上排列*/
            /*align-content: flex-end;*/
            /*侧轴居中排列*/
            /*align-content: center;*/
            /*侧轴拉伸*/
            /*align-content: stretch;*/
            /*侧轴两边贴边*/
            align-content: space-between;
        }
        div span{
            width: 50px;
            height: 50px;
            background-color: pink;
            border: 3px black solid;
        }
    </style>
</head>
<body>
<div>
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
    <span>6</span>
</div>
</body>
</html>
```

# 六、flex-flow（复合属性，相当于同时设置flex-direction和flex-wrap）
1. 设置以列主轴方向，并换行

![img_1872.png](https://raw.githubusercontent.com/Oumu33/notes/main/notes/images/img_1872.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>flex布局</title>
    <style>
        div {
            display: flex;
            width: 250px;
            height: 150px;
            background-color: skyblue;
            /*已列方向为主轴*/
            flex-direction: column;
            /*超出后换行*/
            flex-wrap:wrap;
            /*以上两个属性合写*/
            flex-flow:column wrap;
        }

        div span {
            width: 50px;
            height: 50px;
            background-color: pink;
            border: 3px black solid;
        }
    </style>
</head>
<body>
<div>
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
    <span>6</span>
</div>
</body>
</html>
```


