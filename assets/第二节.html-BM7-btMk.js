import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as s,a}from"./app--MOAAaKs.js";const t="/notes-image/%E6%8A%A5%E6%96%87%E4%BA%A4%E6%8D%A2.png",n="/notes-image/%E6%B5%81%E7%A8%8B.png",l="/notes-image/%E4%BA%A4%E6%8D%A2%E6%AF%94%E8%BE%83.png",r="/notes-image/%E9%A2%98%E7%9B%AE.png",p={},h=a(`<h2 id="一-协议-为进行网络中的数据交换而建立的规则、标准或约定" tabindex="-1"><a class="header-anchor" href="#一-协议-为进行网络中的数据交换而建立的规则、标准或约定"><span>一.协议（为进行网络中的数据交换而建立的规则、标准或约定）：</span></a></h2><p>1.协议存在形式：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 1.</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">RFC</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">（</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">request</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> for</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> comment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">）</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">文档</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 2.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">程序</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">（</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">集成到操作系统</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.协议的三要素：语法 ，语义，同步<br> 3.因特网组成部分：边缘部分和核心部分</p><ul><li>网络核心部分起特殊作用的是路由器(router)。</li><li>路由器是实现分组交换(packet switching)的关键构件，其任务是转发收到的分组，这是网络核心部分最重要的功能。</li></ul><p>4.TCP比UDP更可靠，但是速度比UDP慢，因为要三次握手，返回ACK（acknowledge）表示收到正确的包</p><h2 id="二-c-s" tabindex="-1"><a class="header-anchor" href="#二-c-s"><span>二.C/S：</span></a></h2><p>1.进程间的通信方式：<em>客户服务器方式（C/S）和对等方式（P2P）</em> （client/server ，peer-to-peer）<br> 2.CDN（内容分发网络）：防止服务器过多请求，一般6000以上/每台建议使用，例如天猫双十一。<br> 3.<mark>两机通信方式实际是主机A的某进程与主机B上另一进程的通信</mark></p><h2 id="三-分组交换" tabindex="-1"><a class="header-anchor" href="#三-分组交换"><span>三.分组交换：</span></a></h2><p>1.交换技术主要有：</p><ul><li>电路交换（电话网）——不适合计算机数据突发性的要求</li><li>报文交换 （电报网）</li><li>分组交换 （计算机网络）</li></ul><p>2.分组交换借鉴了报文交换的<mark>面向无连接、存储转发</mark>的优点：<br><img src="`+t+`" alt="报文交换" loading="lazy"><br> 3.分组交换改进了报文交换的存储整个报文的缺点。同时分组交换传输时有多条路径可选。<br> 4.在发送端，先把较长的报文划分成较短的、固定长度的数据段<br> 5.每一个数据段前面添加上<mark>首部</mark>构成分组。<br> 6.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>- 分组交换网以“分组”作为数据传输单元。</span></span>
<span class="line"><span>- 依次把各分组发送到接收端（假定接收端在左边）。</span></span>
<span class="line"><span>- 每一个分组的首部都含有地址等控制信息。</span></span>
<span class="line"><span>- 分组交换网中的节点交换机根据收到的分组的首部中的地址信息，把分组转发到下一个节点交换机。（存储转发）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7.接收端收到分组后剥去首部还原成报文：<br><img src="`+n+`" alt="流程" loading="lazy"><br> 8.首部包含发送和接收端的ip地址，还有分组的序号。<br> 9.总结分组交换的优点：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>1.对通信链路逐段占用 --高效</span></span>
<span class="line"><span>2.以分组为单位 --灵活</span></span>
<span class="line"><span>3.面向无连接 --迅速</span></span>
<span class="line"><span>4.存储转发 --可靠</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="电路和分组交换的时延计算" tabindex="-1"><a class="header-anchor" href="#电路和分组交换的时延计算"><span>电路和分组交换的时延计算</span></a></h2><p>1.三种交换比较：<br><img src="`+l+`" alt="比较" loading="lazy"><br> 2.电路交换时延：<br> 电路交换时延 = 连接建立时延 + 发送时延 + 传播时延</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>- 发送时延 = 数据块长度（b）/信道带宽（b/s）--最后单位是秒</span></span>
<span class="line"><span>- 传播时延 = 信道长度（m）/信号在信道上的传播速率（m/s）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>3.分组交换时延:<br><mark>分组交换时延 = 发送时延 + 传播时延 + 中间节点处理时延</mark><br> 4.计算题：<br><img src="`+r+'" alt="题目" loading="lazy"></p>',19),d=[h];function o(c,g){return s(),e("div",null,d)}const u=i(p,[["render",o],["__file","第二节.html.vue"]]),b=JSON.parse('{"path":"/notes/network/%E7%AC%AC%E4%BA%8C%E8%8A%82.html","title":"第一周（9.5）(9.9)","lang":"zh-CN","frontmatter":{"title":"第一周（9.5）(9.9)","icon":"wine-glass-empty","order":2,"tag":"Computer Network","description":"一.协议（为进行网络中的数据交换而建立的规则、标准或约定）： 1.协议存在形式： 2.协议的三要素：语法 ，语义，同步 3.因特网组成部分：边缘部分和核心部分 网络核心部分起特殊作用的是路由器(router)。 路由器是实现分组交换(packet switching)的关键构件，其任务是转发收到的分组，这是网络核心部分最重要的功能。 4.TCP比UDP...","head":[["meta",{"property":"og:url","content":"https://gunksd.github.io/notes/network/%E7%AC%AC%E4%BA%8C%E8%8A%82.html"}],["meta",{"property":"og:site_name","content":"本自热爱"}],["meta",{"property":"og:title","content":"第一周（9.5）(9.9)"}],["meta",{"property":"og:description","content":"一.协议（为进行网络中的数据交换而建立的规则、标准或约定）： 1.协议存在形式： 2.协议的三要素：语法 ，语义，同步 3.因特网组成部分：边缘部分和核心部分 网络核心部分起特殊作用的是路由器(router)。 路由器是实现分组交换(packet switching)的关键构件，其任务是转发收到的分组，这是网络核心部分最重要的功能。 4.TCP比UDP..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://gunksd.github.io/notes-image/报文交换.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-09T11:56:17.000Z"}],["meta",{"property":"article:author","content":"Awan"}],["meta",{"property":"article:tag","content":"Computer Network"}],["meta",{"property":"article:modified_time","content":"2024-09-09T11:56:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第一周（9.5）(9.9)\\",\\"image\\":[\\"https://gunksd.github.io/notes-image/报文交换.png\\",\\"https://gunksd.github.io/notes-image/流程.png\\",\\"https://gunksd.github.io/notes-image/交换比较.png\\",\\"https://gunksd.github.io/notes-image/题目.png\\"],\\"dateModified\\":\\"2024-09-09T11:56:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Awan\\",\\"url\\":\\"https://gunksd.github.io\\"}]}"]]},"headers":[{"level":2,"title":"一.协议（为进行网络中的数据交换而建立的规则、标准或约定）：","slug":"一-协议-为进行网络中的数据交换而建立的规则、标准或约定","link":"#一-协议-为进行网络中的数据交换而建立的规则、标准或约定","children":[]},{"level":2,"title":"二.C/S：","slug":"二-c-s","link":"#二-c-s","children":[]},{"level":2,"title":"三.分组交换：","slug":"三-分组交换","link":"#三-分组交换","children":[]},{"level":2,"title":"电路和分组交换的时延计算","slug":"电路和分组交换的时延计算","link":"#电路和分组交换的时延计算","children":[]}],"git":{"createdTime":1725537148000,"updatedTime":1725882977000,"contributors":[{"name":"gunksd","email":"3056571032@qq.com","commits":5}]},"readingTime":{"minutes":2.68,"words":803},"filePathRelative":"notes/network/第二节.md","localizedDate":"2024年9月5日","autoDesc":true}');export{u as comp,b as data};
