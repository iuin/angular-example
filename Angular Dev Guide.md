尽可能保持平面化的目录结构
当有 7个或更多文件时才新建目录；
为每个组件新建一个目录，保存它的 .ts,.html,.css,.spec 等文件；
在单个特性范围内，把所有共享的文件放到 shared 目录，在一个特性范围内，分离出组件共享的文件；
把目录的名字命名为它包含的特性名字；
布局组件
把定义总体布局的组件放到 shared 目录；
把共享的布局组件放到 shared 目录下它自己的独立目录里；
创建和导入封装桶
新建一个文件，用来导入、归集和重新导出项目。该技巧被称作 封装桶 。把该封装桶文件命名为 index.ts ；
为惰性加载目录名字加前缀 +，使用组件路由器来惰性加载可以路由的特性。
命名文件到这个程度：可以从名字立刻知道它包含了什么，代表了什么；
文件名要具有说明性，并保证文件中只包含一个组件；
避免 创建包含很多组件、服务或者混合体的文件；
把模板和样式提取到它们自己的文件
当超过三行的时候，把模板和样式提取到一个单独的文件
当组件名字为 [component-name] 的时候，命名它的模板为 [component-name].component.html
文件结构如下图所示：
文件
每个文件只定义一样东西 (比如服务或者组件 )，把文件大小限制在 400行代码以内；
定义小函数，限制在 75 行之内；
遵循同一个模式来描述符号的特性和类型。推荐的模式为 feature.type.ts，使用惯用的后缀来描述类型，比如 *.service 、 *.component 、 *.pipe、*.model；
在描述性名字里面，使用横杠来分隔单词;
启动
把应用的引导程序和平台相关的逻辑放到名为 main.ts 的文件里；
避免 把应用逻辑放到 main.ts 里。考虑把它放到组件或服务里面；
 
组件与指令命名
以它们所代表的东西命名;
使用大写驼峰命名法来命名所有符号 ( 类 ) 。保持符号的名字与它所在的文件名字相同;
把符号的类型 ( 比如组件、服务、指令等 ) 附加到符号名的后面;
如下所示：
符号名	文件名
export class HeroesComponent	heroes.component.ts
export class HeroListComponent	hero-list.component.ts
export class ValidationDirective	validation.directive.ts
服务
使用大写驼峰命名法来命名服务；
当不能从它们的名字里清楚的看出它们是什么的时候 ( 比如它们的名字是名词时 ) ，添加 Service 后缀；
如下所示：
符号名	文件名
export class HeroDataService {}	hero-data.service.ts
export class CreditService {}	credit.service.ts
 
指令的选择器
使用小驼峰命名法来命名指令的选择器，Angular 2 HTML 解析器是大小写敏感的，它识别小写驼峰写法；
保持指令里定义的属性名字与它们绑定的视图 HTML 属性名字一致；
为组件的选择器使用自定义前缀。比如，前缀 tod 是从 Tour of Heros 来的，前缀 admin 代表了 admin 的特性区域；
使用前缀来识别特性区域或者应用程序本身；
如下所示
@Component({
 selector: 'admin-users'
})
export class UsersComponent {}
@Directive({
 selector: '[tohValidate]'
})
export class ValidateDirective {}
管道名
为所有管道使用前后一致的命名约定，用它们的特性来命名；
如下：
@Pipe({ name: 'ellipsis' })
export class EllipsisPipe implementsPipeTransform { }

编程约定
类
使用大写驼峰命名法来命名类；
export class ExceptionService {
 constructor() { }
}
常量
用 const 声明变量，除非它们的值在应用的生命周期内会发生变化；
把常量名拼写为小驼峰格式；
export const mockHeroes   = ['Sam', 'Jill'];
接口
使用大写驼峰命名法来命名接口；
不要在接口名字前面加 I 前缀；
属性和方法
使用小写驼峰命名法来命名属性和方法；
避免使用下划线为前缀来命名私有属性和方法；
import { Injectable } from '@angular/core';
@Injectable()
export class ToastService {
 message: string;
  privatetoastCount: number;
 hide() {
   this.toastCount--;
   this.log();
  }
 show() {
   this.toastCount++;
   this.log();
  }
 private log() {
   console.log(this.message);
  }
}
内联 Input 和 Output 属性装饰器
使用 @Input 和 @Output, 而非 @Directive 和 @Component 装饰器里面的 inputs 和 outputs 属性；
把 @Input() 或者 @Output() 放到它们装饰的属性的同一行；
成员顺序
把属性成员放到顶部，方法成员紧随其后；
先放公共成员，再放私有成员，并按照字母顺序排列；
export class ToastComponent implementsOnInit {
  //public properties
 message: string;
 title: string;
  //private fields
  privatedefaults = {
   title: '',
   message: 'May the Force be with You'
  };
 private toastElement: any;
  //public methods
 activate(message = this.defaults.message, title = this.defaults.title) {
   this.title = title;
   this.message = message;
   this.show();
  }
 ngOnInit() {
   this.toastElement = document.getElementById('toh-toast');
  }
  //private methods
 private hide() {
   this.toastElement.style.opacity = 0;
   window.setTimeout(() => this.toastElement.style.zIndex = 0, 400);
  }
 private show() {
   console.log(this.message);
   this.toastElement.style.opacity = 1;
   this.toastElement.style.zIndex = 9999;
   window.setTimeout(() => this.hide(), 2500);
  }
}
把逻辑放到服务里
把组件类中的逻辑限制到只有视图需要的逻辑。所有其它逻辑都应该被放到服务；
把可以重复使用的逻辑放到服务里，保持组件简单并聚焦于它们预期目的；
错误的方式
/* avoid */
import { OnInit } from '@angular/core';
import { Http, Response } from'@angular/http';
import { Observable } from'rxjs/Observable';
import { Hero } from'../shared/hero.model';
const heroesUrl = 'http://angular.io';
export class HeroListComponent implementsOnInit {
 heroes: Hero[];
 constructor(private http: Http) {}
 getHeroes() {
   this.heroes = [];
   this.http.get(heroesUrl)
     .map((response: Response) => <Hero[]>response.json().data)
     .catch(this.catchBadResponse)
     .finally(() => this.hideSpinner())
     .subscribe((heroes: Hero[]) => this.heroes = heroes);
  }
 ngOnInit() {
   this.getHeroes();
  }
 private catchBadResponse(err: any, source: Observable<any>) {
   // log and handle the exception
   return new Observable();
  }
 private hideSpinner() {
   // hide the spinner
  }
}
正确的方式
import { Component, OnInit } from'@angular/core';
import { Hero, HeroService } from'../shared';
@Component({
 selector: 'toh-hero-list',
 template: `...`
})
export class HeroListComponent implementsOnInit {
 heroes: Hero[];
 constructor(private heroService: HeroService) {}
 getHeroes() {
   this.heroes = [];
   this.heroService.getHeroes()
     .subscribe(heroes => this.heroes = heroes);
  }
 ngOnInit() {
   this.getHeroes();
  }
}
不要给输出属性加前缀
命名事件时，不要带前缀 on；
命名事件处理方法时，带前缀 on ，紧跟事件名字；
export class HeroComponent {
 @Output() savedTheDay = new EventEmitter<boolean>();
}
使用指令来加强已有元素
当你需要有无模板的展示逻辑时，使用属性型指令。
@Directive({
 selector: '[tohHighlight]'
})
export class HighlightDirective {
 @HostListener('mouseover') onMouseEnter() {
   // do highlight work
  }
}
 
<divtohHighlight>Bombasta</div>
使用 HostListener 和 HostBinding 类装饰器
使用 @HostListener 和 @HostBinding ，而非 @Directive 和 @Component 装饰器的宿主属性。与属性或方法名字相关联的@HostBinding 或者 @HostListener 应该只在一个地方被修改：在指令的类里。反过来，如果我们使用宿主属性，我们需要在控制器内修改属性声明，然后在指令相关的元数据里修改
@Directive({
 selector: '[tohValidator]'
})
export class ValidatorDirective {
 @HostBinding('attr.role') role = 'button';
 @HostListener('mouseenter') onMouseEnter() {
   // do work
  }
}
服务
在同一个注入器内，服务是单例
在同一个注入器内，把服务当做单例使用。使用它们来共享数据和功能。
export class HeroService {
 constructor(private http: Http) { }
 getHeroes() {
   return this.http.get('api/heroes')
     .map((response: Response) => <Hero[]>response.json().data);
  }
}
单一职责
新建单一职责的服务，把它封装在自己的环境内；
当服务成长到超出单一用途时，新建一个服务；
提供一个服务
在被共享范围内的顶级组件里，将服务提供到 Angular 2 的注入器里；
Angular 2 注入器是层次性的。在顶层组件提供服务时，该服务实例在所有该顶级组件的子级组件中可见并共享。
 
当不同的两个组件需要一个服务的不同的实例时，上面的方法这就不理想了。在这种情况下，我们最好在需要崭新和单独服务实例的组件里提供服务
 
使用 @Injectable() 类装饰器
当使用类型作为令牌来注入服务的依赖时，使用 @Injectable 类装饰器，而非 @Inject 参数装饰器。
Angular 的依赖注入机制，是根据在服务的构造函数里面的类型的声明，来解析所有服务的依赖的。
数据服务
分离数据调用
把数据操作和数据互动重构到服务里；
让数据服务来负责 XHR 调用、本地储存、内存储存或者其他数据操作；
生命周期钩子
实现生命周期钩子接口
实现生命周期钩子接口，避免在方法名字拼写错误时，造成无意间没有调用钩子的可能。
@Component({
 selector: 'toh-hero-button',
 template: `<button>OK</button>`
})
export class HeroButtonComponent implementsOnInit {
 ngOnInit() {
   console.log('The component is initialized');
  }
}



编码风格:
	1. 使用空格代替tab，建议是使用4个空格, 与Java风格一致(google 建议使用2个空格)
	2. 不能省略分号，每个语句必须以分号结尾。不允许依赖于JS自动添加分号的功能。
	3. 不推荐代码水平对齐，会添加若干多余的空格
	4. 杜绝var声明变量，使用const或let来声明所有局部变量。如果变量不需要被重新赋值，默认应该使用const。应该拒绝使用关键字var。
	5. 优先使用箭头函数
	6. 使用模板字符串取代连接字符串，在处理多行字符串时，模板字符串比复杂的拼接字符串要表现的更出色。
	7. 不要使用连续行风格长字符串，在JS中，\也代表着续行符。
	8. 优先使用for..of
	9. 常量命名规范，常量命名应该使用全大写格式，并用下划线分割
	10. 每次只声明一个变量
	11. 使用单引号，只允许使用单引号包裹普通字符串，禁止使用双引号。如果字符串中包含单引号字符，应该使用模板字符串。
https://google.github.io/styleguide/jsguide.html

https://segmentfault.com/a/1190000013972464

https://www.cnblogs.com/huangenai/p/7246651.html
