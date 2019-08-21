# vue项目开发基本知识点总结

## 概要
<h4> 1. 组件
<h4> 2. vue cli
<h4> 3. vue router
<h4> 4. vue resource
<h4> 5. axios
<h4> 6. vuex

---
<br />

### 1. 组件
> #### 1. 全局组件
##### 语法：
- 格式：<br />
    `Vue.component(tagName, options)`
- 参数：
    - `tagName` => 组件名称
    - `options` => 配置项
        - `data` => 数据，是个<font color="#f00">函数</font>
        - `template` => 模板，内容为html结构(<font color="#f00">必须参数</font>)
            
##### 解析
- 这里的Vue是一个对象，在引入的vue.js库中，每个Vue应用都是通过用Vue函数创建一个新的Vue实例开始的，这个Vue实际上就是一个构造函数。
- 在Vue的构造函数(实例)中，它有一个component方法，<font color="#f00">Vue构造函数下面的这个component方法就是用来声明全局组件的</font>。
- 这个component方法接收两个参数，tagName(组件名称)和options(组件配置)。
- tagName：当一个组件声明之后需要使用，使用的时候需要在html文件里面写标签对，而这标签对的名称，就是这个组件声明时候的名称。
- options：针对这个组件我们需要给它很多设置。它是一个对象，可以放很多参数，最基本的有两个，一个是数据(data)，一个是html模板(template)。

<br />

> ##### <font color="#8BB0D2">示例1：</font>
> 全局组件的基本用法

html:
```
<!-- 用来放vue的容器 -->
<div id="app">
    <!-- 全局组件的名称(tagName) -->
    <counter></counter>
</div>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js：
```
/**
 * vue对象注册全局组件的方法
 * Vue.component(tagName, options)
 * 组件名称，配置项（data, template...）
 * 将组件名(tagName)放到html中
 * options是一个对象，表示组件中的选项
 */
Vue.component("counter",  {
    // template中所有的标签需要包含在一个父级当中
    template: '<button>按钮</button>',
});

// 实例化Vue对象
new Vue({
    // 用来放vue的容器，声明的这个vue对象，要在页面中放在id为app的div中展示。
    el: "#app",
});
```

> ##### <font color="#8BB0D2">示例2：</font>
> 全局组件关联template

html:
```
<!-- 用来放vue的容器 -->
<div id="app">
   <counter></counter>
</div>

<!--
    用来放vue模板的容器
    
    1. template标签它是放在body当中，并一定要与上面的div平级
    2. 需要给一个id用于关联
    3. 同样需要一个父级
-->
<template id="btn">
    <!-- 需要被包含在一个容器当中 -->
     <div>
     	<button>按钮</button>
     	<span>按照平常的html写法就可以了</span>
     </div>
</template>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js
```
// vue对象，调用component注册全局组件
Vue.component("counter",  {
    // 使用在body中vue模板(template)的id
    template: '#btn',
});

new Vue({
    el: "#app",
});
```

> ##### <font color="#8BB0D2">示例3：</font>
> 全局组件关联中data的用法

html:
```
<!-- 用来放vue的容器 -->
<div id="app">
   <counter></counter>
</div>

<!-- 用来放vue模板的容器 -->
<template id="btn">
     <div>
     	<button>按钮</button>
     	<!-- 在data中的数据可以使用模板字符串的形式使用 -->
     	<span>{{ count }}</span>
     </div>
</template>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js
```
// vue中component注册全局组件的方法中的参数options是一个对象，里面有若干属性和方法，data是其中一个表示组件中数据的方法
Vue.component("counter",  {
    template: '#btn',
    
    // 表示vue组件中的数据，是一个方法
    // 在es6中，在对象中写一个函数的方法
    data() {
        // 在data对象中需要有一个return,这个return是一个对象，在这个对象里面可以存储这个组件所需要的数据
        return{
            count: 0,
        }
    }
});

new Vue({
    el: "#app",
});
```

> ##### <font color="#8BB0D2">示例4：</font>
> 全局组件中定义方法

html:
```
<!-- 用来放vue的容器 -->
<div id="app">
   <counter></counter>
</div>

<!-- 用来放vue模板的容器 -->
<template id="btn">
     <div>
        <!-- 在vue中使用方法用 @事件名=“方法名” -->
     	<button @click="add">按钮</button>
     	<span>{{ count }}</span>
     </div>
</template>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js
```
Vue.component("counter",  {
    template: '#btn',
    
    data() {
        return{
            count: 0,
        }
    },
    
    // 在全局组件中定义方法
    methods: {
        add() {
            // 取到组件中的数据使用this.数据
    	    this.count++;
    	}
    }
});

new Vue({
    el: "#app",
});
```

<font color="#EB563B">注意：</font>
- 每个Vue应用都是通过用Vue函数创建一个新的Vue实例开始的。
- 组件就是具体的一个个功能。一个实际的功能里面会有很多结构。结构都放在template中，就是一个模板。
- template中所有的标签需要包含在一个父级当中。
- 每一个全局组件之间相互独立，即每次实例化的Vue相互不关联。
- 所有的组件名称不能使用驼峰命名(标签不能用大写字母)，要使用-，比如说你的一个组件名称叫counterA，你在标签里面使用的话只能用<counter-A></counter-A>

<br /><br />
> #### 2. 局部组件
- 语法：
    - 格式：
    ```
    new Vue({
        components: {
            tagName: options,
            tagName: options,
            ...
        }
    })
    ```
    - 注意：
        - 参数与全局组件一样
        - 全局组件是通过`vue component`生成的(<font color="#f00">没有s</font>)，局部组件用的是components(<font color="#f00">带s</font>)。
        
##### 解析
- 局部组件相当于局部变量
- 和原生一样，原生不建议使用全局变量，组件也是，尽量不使用全局组件。
- 和全局组件不一样，全局组件是在原生的vue对象上使用component方法，`Vue.component`，而局部组件是new了一个Vue实例。
- 这个被创建的vue实例放在components中，比注册全局组件的方法多了一个s。
- 在components中的语法和全局组件中的语法一样。
- 局部组件只能在当前实例的vue中使用。

<br />

> ##### <font color="#8BB0D2">示例1：</font>
> 局部组件的基本用法

html:
```
<!-- 用来放vue的容器 -->
<div id="app">
    <!-- navBar组件 -->
    <!-- js中组件名定义的是驼峰命名，在标签中不允许驼峰，故用-连接 -->
    <nav-bar></nav-bar>
</div>

<!-- navBar组件的模板 -->
<navTemplate>
    <ul>
        <li>食材1</li>
        <li>食材2</li>
    </ul>
</navTemplate>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js：
```
new Vue({
    el: "#app",
    
    // 局部组件直接在实例化后的vue中使用compontents,在这里可以放很多个组件
    components: {
        // 组件名
        navBar: {
            template: "#navTemplate",
        },
        // 组件名
        navList: {
            
        },
        // .....
    }
});
```

> ##### <font color="#8BB0D2">示例2：</font>
> 在局部组件中存放数据，并定义方法

html:
```
<!-- 用来放vue的容器 -->
<div id="app">
    <!-- navBar组件 -->
    <nav-bar></nav-bar>
</div>

<!-- navBar组件的模板 -->
<navTemplate>
    <!-- 用模板字符串使用数据 -->
    <!--<ul>
        <li>{{ text[0] }}</li>
        <li>{{ text[1] }}</li>
    </ul>-->

    <!-- 使用v-for遍历 -->
    <ul>
        <li v-for="(item, index) in text" :key="index" @click="log">{{ item }}</li>
    </ul>
</navTemplate>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js：
```
new Vue({
    el: "#app",
    
    components: {
        // 组件名
        navBar: {
            // 定义模板
            template: "#navTemplate",
            
            // 数据
            data() {
                return {
                    text: ["食材1", "食材2"],
                }
            },
            
            // 方法
            methods: {
                log() {
                    console.log("点击");
                }
            }
        },
    }
});
```

> ##### <font color="#8BB0D2">示例3：</font>
> 局部组件有作用域

html:
```
<!-- 用来放vue的容器 -->
<div id="app">
    <!-- navBar组件 -->
    <nav-bar></nav-bar>
    
    <!-- navList组件 -->
    <nav-list></nav-list>
</div>

<!-- 用来放vue的容器 -->
<!-- 局部组件无法应用，有作用域，只能在app中使用 -->
<div id="box">
  <!-- 组件模板2  -->
  <nav-list></nav-list>  
</div>

<!-- navBar组件的模板 -->
<navTemplate>
    <ul>
        <li>食材1</li>
        <li>食材2</li>
    </ul>
</navTemplate>

<!-- navList组件模板 -->
<template id="navListTemplate">
   <span>navList233333</span>
</template>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js：
```
new Vue({
    el: "#app",
    
    components: {
        // 组件名
        navBar: {
            // 定义模板
            template: "#navTemplate",
        },
        
        // 组件名
        navList: {
            template: "#navListTemplate",
        },
    }
});

new Vue({
    el: "#box",
});
```

<br />

<font color="#f00">关于全局组件和之间的区别</font>
- 全局组件和局部组件与js中的全局变量和局部变量非常相似，它们身上所具有的特性，在组件中也能够体现出来。

<br /><br />
#### 3. Props
##### 定义：
props：在组件上定义一些属性用来传递数据(传递给组件里的结构使用)

##### 语法：
- 组件里：props:['属性名', '属性名', ...]
- 模板里：{{ 属性名 }}
- 标签里：<组件 属性名="值" 属性名="值"></组件>
            
##### 解析
- 用来传递数据
- 和形参与实参差不多
- html结构相同，但数据不同，组件传递数据

<br />

> ##### <font color="#8BB0D2">示例1：</font>
> props的基本用法

html:
```
<!-- 用来放vue的容器 -->
<div id="app">
    <!-- 每个li是一个组件，外面用ul包起来 -->
    <ul>
        <!-- boxList组件 -->
        <!-- 组件结构相同，数据不同，给每个组件的props中定义的属性赋值 -->
        <box-list title="可乐" price="112"></box-list>
        <box-list title="雪碧" price="333"></box-list>
    </ul>
</div>

<!-- boxList组件模板 -->
<template id="boxListTemplate">
    <li>
        <!-- 使用模板字符串的方式渲染props传递过来的值 -->
         <span>{{ title }}</span>
         <span>{{ price }}</span>
    </li>
</template>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js：
```
new Vue({
    el: "#app",
    
    components: {
        boxList: {
            template: "#boxListTemplate",
            
            // props 在组件上定义一些属性用来传递数据
            props: ["title", "price"]
        }
    }
});
```

<br /><br />
#### 3. Slot
##### 定义：
slot：插槽

##### 语法：
- 插槽(slot)：用于分发内容
    - template里定义：<slot></slot>
    - 组件标签对里使用(标签对里的标签能被解析)
    - 注意：插槽只能写一个，多写会报错
- 具名插槽：给slot添加name属性后就叫具名插槽
    - template里定义：<slot name="属性名"></slot>
    - 组件标签对里使用：<p slot="属性名"></p>
            
##### 解析
- 在使用props传递数据的时候，在使用组件的标签对中，数据都当做属性传递进来。这种方法传递的数据比较少比较清楚，但数据量一多就显得累赘。
- 在vue中，组件和标签是一样的，为了更像html标签，组件中传递数据可以用slot这种形式传递，结构会更清晰。
- 举个例子，就像一台电脑，它有各种插槽用来放显卡，内存等等，还有usb接口等等，这些插槽，就相当于vue中的slot。
- 在组件标签对中不会显示里面的标签，组件定义好之后，就相当于在内部已经成为一个完全封闭的状态了。

<br />

> ##### <font color="#8BB0D2">示例1：</font>
> slot的基本用法（传递数据）

html:
```
<!-- 用来放vue的容器 -->
<div id="app">
    <!-- boxList组件 -->
    <box-list>
        <!-- 组件标签对中的内容不显示 -->
        <!-- p标签中若有数据，使用slot分发内容，在组件的标签对里面放的都是数据 -->
    	<p>使用slot才能显示....</p>
    	<p>template里面使用一个slot就会全部显示</p>
    	...
    </box-list>
</div>

<!-- boxList组件模板 -->
<template id="boxListTemplate">
    <!-- 插槽在template中定义，相当于划一道口，想在哪里显示，slot插槽就放在哪里 -->
    <div>
        <h1>test</h1>
        
        <!-- 组件标签对中的内容在h1下面显示，它这里是显示组件标签对中所有的数据 -->
        <slot></slot>
    </div>
</template>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js：
```
new Vue({
    el: "#app",
    
    components: {
        boxList: {
            template: "#boxListTemplate",
        }
    }
});
```

> ##### <font color="#8BB0D2">示例2：</font>
> slot的基本用法（具名插槽）

html:
```
<!-- 用来放vue的容器 -->
<div id="app">
    <!-- boxList组件 -->
    <box-list>
        <!-- 使用具名插槽 -->
        <span slot="cc1">插槽1</span>
	    <span slot="cc2">插槽2</span>
    </box-list>
</div>

<!-- boxList组件模板 -->
<template id="boxListTemplate">
    <!-- 插槽在template中定义，相当于每把刀上有一个名字，刀每划一道口，有特定的含义，使用的时候根据刀名字使用 -->
    <div>
        <h1>test</h1>
        
        <!-- 可以用名称定义显示部分（具名插槽） -->
	<slot name="cc1"></slot>
	<slot name="cc2"></slot>
    </div>
</template>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js：
```
new Vue({
    el: "#app",
    
    components: {
        boxList: {
            template: "#boxListTemplate",
        }
    }
});
```

> ##### <font color="#8BB0D2">示例3：</font>
> slot传递数据

html:
```
<!-- 用来放vue的容器 -->
<div id="app">
    <ul>
        <!-- boxList组件 -->
        <!-- 在组件标签对中使用具名插槽，并可以按照传统html写法把数据添加上去，一个标签对就是一个li，只要把组件模板中的插槽拿过来就可以了 -->
        <box-list>
            <span slot="title">可乐</span>
            <span slot="price">22</span>
        </box-list>
        <!-- boxList组件 -->
        <box-list>
            <span slot="title">雪碧</span>
            <span slot="price">33</span>
        </box-list>
    </ul>
</div>

<!-- boxList组件模板 -->
<template id="boxListTemplate">
    <!-- 在template中定义具名插槽，这里是具体的html结构，在li结构中 -->
     <li>
        <a href="#">
         	<slot name="title"></slot>
         	<slot name="price"></slot>
         	<span>食品介绍<span>
     	</a>
     </li>
</template>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js：
```
new Vue({
    el: "#app",
    
    components: {
        boxList: {
            template: "#boxListTemplate",
        }
    }
});
```

<br /><br />
#### 4. 父子组件
##### 4-1. 父子组件的定义
###### 语法：
```
new Vue({
    // vue容器
    el: "#app",

    components: {
        父组件名: {
    	    template: "父组件template对应的id",
    	    
    	    data() {
    	        // 父组件数据
    	    },
    	    
    	    // 子组件
    	    components: {
    	    	子组件名: {
    	    	    template: "子组件template对应的id",
    	    	},
    	    	...
    	     }
        }
    }
});
```

###### 解析:
- 一个组件就是一个功能里面的结构，这个结构可能包含在其他的结构当中，而这个结构就是外面那个结构的子组件，包围子组件的那个结构就是父组件。

> ##### <font color="#8BB0D2">示例1：</font>
> 基本的父子组件

html:
```
<!-- 用来放vue的容器 -->
<div id="app">
   <!-- boxList组件(父组件) -->
   <box-list></box-list>
</div>

<!-- boxList组件(父组件)模板 -->
<!-- 父组件模板使用ul标签 -->
<template id="boxListTemplate">
     <ul>
        <!-- 在父组件中使用子组件 -->
        <!-- 子组件使用插槽 -->
     	<!-- 子组件只能在父组件模板里面调用 -->
     	<!-- 定义所有插槽的值(定义数据) -->
     	<item>
    		<span slot="title">可乐</span>
    		<span slot="price">44</span>
	    </item>
	    
     	<item>
    		<span slot="title">雪碧</span>
    		<span slot="price">33</span>
	    </item>
     </ul>
</template>

<!-- item组件(子组件)模板 -->
<!-- 子组件模板就是一个个li标签 -->
<template id="itemTemplate">
      <!-- html结构，值用插槽代替 -->
      <li>
        <a href="#">
         	<slot name="title"></slot>
         	<slot name="price"></slot>
         	<span>食品介绍<span>
     	</a>
     </li>
</template>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js：
```
new Vue({
    el: "#app",
    
    // 父组件
    components: {
        boxList: {
            // 父组件模板
    	    template: "#boxListTemplate",
    	    
    	    // 子组件
    	    components: {
    	    	item: {
    	    	    // 子组件模板
    	    	    template: "#itemTemplate",
    	    	}
    	     }
        }
    }
});
```

<font color="#f00">关于组件间如何传递数据</font>
- 父组件向子组件传递数据(自动传)
    - 使用props属性传递数据
- 子组件向父组件传递数据(主动传，事件触发)
    - 使用自定义事件

<font color="#f00">关于自定义事件</font>
- 在发数据组件的methods里定义一个方法，方法内容如下：`this.$emit('event', value)`
    - event：自定义事件名称
    - value：要传递的数据(可选参数)
- 在发数据组件的标签里
    - `<component @自定义事件名称="函数名"></component>`
- 在接收数据组件的methods里
```
函数名(val) {
    // val就是接收到的数据
}
```
 
##### 4-2. 父组件给子组件传递数据
###### 语法：
- 父组件向子组件传递数据(自动传)
- 使用props属性

##### 解析
- 父亲可以给儿子零花钱，即父组件可以给子组件传递数据，单向数据流

> ##### <font color="#8BB0D2">示例1：</font>
> 父组件给子组件传递数据(外->里)

html:
```
<!-- 用来放vue的容器 -->
<div id="app">
   <!-- 父组件 -->
   <father></father>
</div>

<!-- father组件(父组件)模板 -->
<template id="fatherTemplate">
    <div>
        <h1>父组件</h1>
        <span>把"{{ name }}"传给子组件</span>
    
        <!--
            使用props传递数据给子组件
            1. 在子组件定义一个props用来接收父组件传递过来的数据
            2. 在父组件中引用子组件，并给该子组件绑定上在子组件上已经定义的props属性名
            3. 绑定的props属性名的值，就是父组件要传过来给子组件的值，这里是name，即取到父组件的name值
            4. 在子组件的template使用数据
        -->
        <son :fatherdata="name"></son>
    </div>
</template>

<!-- son组件(子组件)模板 -->
<template id="sonTemplate">
    <div>
        <h1>子组件</h1>
        <span>这是儿子</span>
        
        <!-- 此时已经将父组件的值通过props传过来了，要使用父组件中的值，就只需要使用在子组件中定义的props属性，并把定义的props属性名用模板字符串的方式在子组件模板中表现出来就行了 -->
        <p>{{ fatherdata }}</p>
    </div>
</template>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js：
```
new Vue({
    el: "#app",
    
    // 父组件
    components: {
        father: {
    	    template: "#fatherTemplate",
    	    
    	    // 父组件数据
    	    data() {
    	    	return {
    	    		name: "老王",
    	    		
    	    		// 用来存放子组件的数据
    	    		sonData: "",
    	    	}
    	    },

            // 子组件
    	    components: {
    	    	son: {
    	    	    template: "#sonTemplate",
    	    	    
    	    	    // 父组件向子组件传递数据，子组件需要定义一个props，用来接收父组件的数据
                    props: ['fatherdata'],
    	    	}
    	     }
        }
    }
});
```

##### 4-3. 子组件给父组件传递数据
###### 语法：
- 子组件向父组件传递数据(主动传，事件触发)
```
// 在发数据组件的methods里定义一个方法
this.$emit('event', value)

...

// 在发数据组件的标签里
<component @自定义事件名称="函数名"></component>

...

// 在接收数据组件的methods里
函数名(val) {
    // val就是接收到的数据
}
```
            
###### 解析
- 儿子可以孝敬父亲，双向数据流。

> ##### <font color="#8BB0D2">示例1：</font>
> slot的基本用法（传递数据）

html:
```
<!-- 用来放vue的容器 -->
<div id="app">
   <!-- 父组件 -->
   <father></father>
</div>

<!-- 父组件模板 -->
<template id="fatherTemplate">
     <div>
       	<h1>父组件</h1>
       	<span>把"{{ name }}"传给子组件</span>
       	<p>{{ sondata }}</p>

       <!-- 在子组件标签绑定属性 -->
       <!-- 在子组件用props属性把已经绑定的属性名写进去 -->
       <!-- 在子组件的template使用数据 -->
       <!-- getdata用来接收数据 -->
       	<son :fatherdata="name" @getdata="getval"></son>
     </div>
</template>

<!-- 子组件模板 -->
<template id="sonTemplate">
      <div>
      	<h1>子组件</h1>
      	<span>这是子组件</span>

      	<p>父组件传过来的数据：“{{ fatherdata }}”</p>

          <!-- 给父组件传数据 -->
          <button @click="send">给父组件传数据</button>
      </div>
</template>

<!-- js s -->
引入vue.js
...
<!-- js e -->
```

js：
```
new Vue({
    el: "#app",
    components: {
        father: {
        	    template: "#fatherTemplate",
        	    data() {
        	    	return {
        	    		name: "老王",
        	    		sondata: "",
        	    	}
        	    },

               methods: {
                    // 拿到子组件给父组件传递的值
                    getval(val) {
                        this.sondata = val;
                    }
               },

        	     components: {
        	    	son: {
        	    	  template: "#sonTemplate",
                        props: ['fatherdata'],
                        data () {
                            return {
                                // 只能通过事件给父组件传数据(自定义事件)
                                // 在发数据的组件(子组件) 定义一个方法
                                message: "你好，我是小王~~~~~",
                            }
                        },

                        methods: {
                            // 给父组件传数据
                            send() {
                                // alert();
                                // 触发自定义事件
                                // $emit("事件名称", 传递的数据)
                                this.$emit("getdata",  this.message);
                            }
                        }
        	    	}
        	     }
        }
    }
});
```

---
<br />

待续...

### 2. vue cli

---
<br />


### . vue router

---
<br />


### 4. vue resource

---
<br />


### 5. axios

---
<br />


### 6. vuex

---
<br />



---

<font color="#666" size="5">\~End~</font>