# qrcode-demo
微信小程序识别二维码demo

# 第三方库

## upng

upng-js 是一个基于 JavaScript 实现的处理 PNG 图像文件格式的 npm 包。它可以对 PNG 图像进行解码、编码和压缩等操作，同时支持使用高级 API 对图像元素进行更精细的控制。

[upng github 地址](https://github.com/photopea/UPNG.js)

主要是用来读取图片的颜色管道数据，然后通过Uint8ClampedArray转换成jsqr能够识别的数据，让jsqr解析二维码

## jsqr

一个纯javascript二维码阅读库。这个库接收原始图像，并将定位、提取和解析其中的任何二维码。
[jsqr github地址](https://github.com/cozmo/jsQR)
