const datas = [
  {
    question: {
      content:
        '<div>  <span style="color: rgb(38,38,38);">输入一个链表的头节点，<span style="color: rgb(51,51,51);">按链表从尾到头的顺序返回</span>每个节点的值（用数组返回）。</span>  </div> <div>  <span style="color: rgb(38,38,38);"><br> </span>  </div> <div>  <span style="color: rgb(38,38,38);">如</span><span style="color: rgb(38,38,38);">输入{1,2,3}的链表如下图:</span>  </div> <div>  <img alt="" src="https://uploadfiles.nowcoder.com/images/20210717/557336_1626506480516/103D87B58E565E87DEFA9DD0B822C55F">  </div> <div>  返回一个数组为[3,2,1] </div> <div>  <br> </div> <div>  <span style="color: rgb(89,89,89);"></span><span style="color: rgb(89,89,89);"></span><span style="color: rgb(89,89,89);"></span><span style="color: rgb(89,89,89);"><span style="color: rgb(89,89,89);">0 &lt;= 链表长度 &lt;= 10000</span></span>  </div>',
      difficulty: 2,
      samples: [
        {
          input: "{1,2,3}",
          note: "",
          output: "[3,2,1]"
        },
        {
          input: "{67,0,24,58}",
          note: "",
          output: "[58,24,0,67]"
        }
      ],
      title: "从尾到头打印链表",
      categories: ["链表"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  给定一个单链表的头结点pHead(该头节点是有值的，比如在下图，它的val是1)，长度为n，反转该链表后，返回新链表的表头。 </div> <div>  <br> </div> <div>  数据范围： <img src="https://www.nowcoder.com/equation?tex=n%5Cleq1000">  </div> <div>  要求：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)"> ，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)"> 。 </div> <div>  <br> </div> <div>  <span></span>如当输入链表{1,2,3}时， </div> <div>  经反转后，原链表变为<span>{3,2,1}，所以</span>对应的输出为{3,2,1}。 </div> <div>  以上转换过程<span>如下图所示：</span>  </div> <div>  <img alt="" src="https://uploadfiles.nowcoder.com/images/20211014/423483716_1634206291971/4A47A0DB6E60853DEDFCFDF08A5CA249" style="height: auto;width: 353.6px;">  </div>',
      difficulty: 2,
      samples: [
        {
          input: "{1,2,3}",
          note: "",
          output: "{3,2,1}"
        },
        {
          input: "{}",
          note: "空链表则输出空               ",
          output: "{}"
        }
      ],
      title: "反转链表",
      categories: ["链表"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  输入两个递增的链表，单个链表的长度为n，合并这两个链表并使新链表中的节点仍然是递增排序的。<br>  <div>  </div> </div> <div>  数据范围： <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20n%20%5Cle%201000">，<img src="https://www.nowcoder.com/equation?tex=-1000%20%5Cle%20%E8%8A%82%E7%82%B9%E5%80%BC%20%5Cle%201000"><br> 要求：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)"><br> </div> <div>  <br> </div> <div>  如输入{1,3,5},{2,4,6}时，合并后的链表为<span>{1,2,3,4,5,6}，所以</span>对应的输出为{1,2,3,4,5,6}，转换过程如下图所示： </div> <div>  <img alt="" src="https://uploadfiles.nowcoder.com/images/20211014/423483716_1634208575589/09DD8C2662B96CE14928333F055C5580" style="height: auto;width: 708.0px;"><br> </div> <div>  <span></span><br> </div> <div>  或输入{-1,2,4},{1,3,4}时，<span>合并后的链表为</span><span><span>{-1,1,2,3,4,4}</span>，所以</span>对应的输出为{-1,1,2,3,4,4}，转换过程如下图所示： </div> <div>  <img alt="" src="https://uploadfiles.nowcoder.com/images/20211014/423483716_1634208729766/8266E4BFEDA1BD42D8F9794EB4EA0A13" style="height: auto;width: 796.5px;"><br> </div>',
      difficulty: 2,
      samples: [
        {
          input: "{1,3,5},{2,4,6}",
          note: "",
          output: "{1,2,3,4,5,6}"
        },
        {
          input: "{},{}",
          note: "",
          output: "{}"
        },
        {
          input: "{-1,2,4},{1,3,4}",
          note: "",
          output: "{-1,1,2,3,4,4}"
        }
      ],
      title: "合并两个排序的链表",
      categories: ["链表", "2021"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  输入两个无环的单向链表，找出它们的第一个公共结点，如果没有公共节点则返回空。（注意因为传入数据是链表，所以错误测试数据的提示是用其他方式显示的，保证传入数据是正确的） </div> <div>  <br> </div> <div>  数据范围： <img src="https://www.nowcoder.com/equation?tex=n%20%5Cle%201000"> <br> 要求：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)"><br> </div> <div>  <br> </div> <div>  例如，输入{1,2,3},{4,5},{6,7}时，两个<span>无环的单向链表的结构如下图所示：</span>  </div> <div>  <img alt="" src="https://uploadfiles.nowcoder.com/images/20211104/423483716_1635999204882/394BB7AFD5CEA3DC64D610F62E6647A6" style="height: auto;width: 707.2px;"><br> </div> <div>  <span style="color: rgb(102,102,102);">可以看到</span><span style="color: rgb(102,102,102);"><span style="color: rgb(51,51,51);">它们的第一个公共结点</span>的结点值为6，所以</span><span style="color: rgb(102,102,102);">返回结点值为6的结点。</span>  </div>',
      difficulty: 2,
      samples: [
        {
          input: "{1,2,3},{4,5},{6,7}",
          note: "第一个参数{1,2,3}代表是第一个链表非公共部分，第二个参数{4,5}代表是第二个链表非公共部分，最后的{6,7}表示的是2个链表的公共部分\n这3个参数最后在后台会组装成为2个两个无环的单链表，且是有公共节点的         ",
          output: "{6,7}"
        },
        {
          input: "{1},{2,3},{}",
          note: "2个链表没有公共节点 ,返回null，后台打印{}      ",
          output: "{}"
        }
      ],
      title: "两个链表的第一个公共结点",
      categories: ["链表"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  给一个长度为n链表，若其中包含环，请找出该链表的环的入口结点，否则，返回null。 </div> <div>  <br> </div> <div>  数据范围： <img src="https://www.nowcoder.com/equation?tex=n%5Cle10000">，<img alt="" src="https://www.nowcoder.com/equation?tex=1%3C%3D%E7%BB%93%E7%82%B9%E5%80%BC%3C%3D10000">  </div> <div>  要求：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">  </div> <div>  <br> </div> <div>  例如，输入{1,2},{3,4,5}时，对应的环形链表如下图所示：<span></span>  </div> <div>  <img alt="" src="https://uploadfiles.nowcoder.com/images/20211025/423483716_1635154005498/DA92C945EF643F1143567935F20D6B46" style="height: auto;width: 530.4px;"><br> </div> <div>  <span>可以看到<span>环的入口结点的结点值为3，所以</span>返回结点值为3的结点。</span><br> </div> <div>  <div>  </div> </div>',
      difficulty: 2,
      samples: [
        {
          input: "{1,2},{3,4,5}",
          note: "返回环形链表入口结点，我们后台程序会打印该环形链表入口结点对应的结点值，即3   ",
          output: "3"
        },
        {
          input: "{1},{}",
          note: '没有环，返回对应编程语言的空结点，后台程序会打印"null"   ',
          output: '"null"'
        },
        {
          input: "{},{2}\n",
          note: "环的部分只有一个结点，所以返回该环形链表入口结点，后台程序打印该结点对应的结点值，即2   ",
          output: "2"
        }
      ],
      title: "链表中环的入口结点",
      categories: ["链表"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  输入一个长度为 n 的链表，设链表中的元素的值为 a<sub>i</sub> ，返回该链表中倒数第k个节点。 </div> <div>  如果该链表长度小于k，请返回一个长度为 0 的链表。 </div> <div>  <br> </div> <div>  <br> </div> <div>  <div style="color: rgb(102,102,102);">   数据范围：<img src="https://www.nowcoder.com/equation?tex=0%20%5Cleq%20n%20%5Cleq%2010%5E5">，<img src="https://www.nowcoder.com/equation?tex=0%20%5Cleq%20a_i%20%5Cleq%2010%5E9">，<img src="https://www.nowcoder.com/equation?tex=0%20%5Cleq%20k%20%5Cleq%2010%5E9">   </div>  <div style="color: rgb(102,102,102);">   要求：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">   </div>  <div style="color: rgb(102,102,102);">   进阶：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">   </div>  <div style="color: rgb(102,102,102);">   <br>  </div>  <div style="color: rgb(102,102,102);">   例如输入{1,2,3,4,5},2时，对应的链表结构如下图所示：  </div>  <div style="color: rgb(102,102,102);">   <img alt="" src="https://uploadfiles.nowcoder.com/images/20211105/423483716_1636084313645/5407F55227804F31F5C5D73558596F2C" style="height: auto;width: 619.5px;">  </div>  <div style="color: rgb(102,102,102);">   其中蓝色部分为该链表的最后2个结点，所以返回倒数第2个结点（也即<span style="color: rgb(102,102,102);">结点值为4的结点</span>）即可，系统会打印后面所有的节点来比较。<br>  </div>  <div style="color: rgb(102,102,102);">  </div> </div>',
      difficulty: 2,
      samples: [
        {
          input: "{1,2,3,4,5},2",
          note: "返回倒数第2个节点4，系统会打印后面所有的节点来比较。 ",
          output: "{4,5}"
        },
        {
          input: "{2},8",
          note: "",
          output: "{}"
        }
      ],
      title: "链表中倒数最后k个结点",
      categories: ["链表"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针random指向一个随机节点），请对此链表进行深拷贝，并返回拷贝后的头结点。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）。<span> 下图是一个含有5个结点的复杂链表。<span>图中实线箭头表示next指针，虚线箭头表示random指针。为简单起见，指向<span>null</span>的指针没有画出。</span></span>  </div> <div>  <span><img alt="" src="https://uploadfiles.nowcoder.com/images/20210616/557336_1623831920130/2CD1CC917CD1875FF9CD391C2924DF09"></span>  </div> <div>  <span><br> </span>  </div> <div>  示例: </div> <div>  输入:{1,2,3,4,5,3,5,#,2,#} </div> <div>  输出:{1,2,3,4,5,3,5,#,2,#} </div> <div>  解析:我们将链表分为两段，前半部分<span>{1,2,3,4,5}</span>为ListNode，后半部分{3,5,#,2,#}是随机指针域表示。 </div> <div>  以上示例前半部分可以表示<span>链表</span>为的<span>ListNode:</span>1-&gt;2-&gt;3-&gt;4-&gt;5 </div> <div>  后半部分，3，5，#，2，#分别的表示为 </div> <div>  1的位置指向3，2的位置指向5，3的位置指向<span>null</span>，4的位置指向2，5的位置指向null </div> <div>  如下图: </div> <div>  <img alt="" src="https://uploadfiles.nowcoder.com/images/20210616/557336_1623836735191/971325772A17A314D3C44EBCDB6E7209"><br> </div>',
      difficulty: 4,
      samples: [
        {
          input: "{1,2,3,4,5,3,5,#,2,#}",
          note: "",
          output: "{1,2,3,4,5,3,5,#,2,#}"
        }
      ],
      title: "复杂链表的复制",
      categories: ["链表"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表 1-&gt;2-&gt;3-&gt;3-&gt;4-&gt;4-&gt;5  处理后为 1-&gt;2-&gt;5 </div> <div>  <br> </div> <div>  数据范围：链表长度满足 <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20n%20%5Cle%201000%20%5C"> ，链表中的值满足 <img src="https://www.nowcoder.com/equation?tex=1%20%5Cle%20val%20%5Cle%201000%20%5C"><br> </div> <div>  <br> </div> <div>  进阶：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)%5C"> ，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)%20%5C"><br> </div> <div>  <br> </div> <div>  例如输入{1,2,3,3,4,4,5}时，对应的输出为{1,2,5}，<span></span>对应的输入输出链表如下图所示： </div> <div>  <img alt="" src="https://uploadfiles.nowcoder.com/images/20211105/423483716_1636083477137/5B9CC4C8B8AE60071D9441AB64E66772">  </div> <div> </div>',
      difficulty: 4,
      samples: [
        {
          input: "{1,2,3,3,4,4,5}",
          note: "",
          output: "{1,2,5}"
        },
        {
          input: "{1,1,1,8}",
          note: "",
          output: "{8}\n"
        }
      ],
      title: "删除链表中重复的结点",
      categories: ["链表"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        "<p>  给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。返回删除后的链表的头节点。 </p> <div>  <span>1.</span>此题对比原题有改动 </div> <div>  2.<span>题目保证链表中节点的值互不相同</span>  </div> <div>  <span>3.</span>该题只会输出返回的链表和结果做对比，所以<span>若使用 C 或 C++ 语言，你不需要 free 或 delete 被删除的节点</span>  </div> <div>  <br> </div> <div>  数据范围: </div> <div>  0&lt;=链表节点值&lt;=10000 </div> <div>  <span>0&lt;=链表长度&lt;=10000</span><br> </div>",
      difficulty: 2,
      samples: [
        {
          input: "{2,5,1,9},5",
          note: "给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 2 -> 1 -> 9   ",
          output: "{2,1,9}\n"
        },
        {
          input: "{2,5,1,9},1",
          note: "给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 2 -> 5 -> 9   ",
          output: "{2,5,9}\n"
        }
      ],
      title: "删除链表的节点",
      categories: ["链表"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度，根节点的深度视为 1 。 </div> <div>  <br> </div> <div>  数据范围：节点的数量满足 <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20n%20%5Cle%20100"> ，节点上的值满足 <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20val%20%5Cle%20100"><br> </div> <div>  进阶：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)"> ，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)"><br> </div> <div>  <br> </div> <div>  假如输入的用例为{1,2,3,4,5,#,6,#,#,7}，那么如下图: </div> <div>  <img alt="" src="https://uploadfiles.nowcoder.com/images/20211105/557336_1636101249194/DFDBE52B6C61F8021FC86EB0779848B1" style="height: auto;width: 408.8px;"><br> </div>',
      difficulty: 2,
      samples: [
        {
          input: "{1,2,3,4,5,#,6,#,#,7}",
          note: "",
          output: "4"
        },
        {
          input: "{}",
          note: "",
          output: "0\n"
        }
      ],
      title: "二叉树的深度",
      categories: ["树"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  给定一个二叉树，返回该二叉树的之字形层序遍历，（第一层从左向右，下一层从右向左，一直这样交替） </div> <div>  <br> </div> <div>  数据范围：<img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20n%20%5Cle%201500">,树上每个节点的val满足 <img src="https://www.nowcoder.com/equation?tex=%7Cval%7C%20%3C%3D%20100"><br> 要求：空间复杂度：<img src="https://www.nowcoder.com/equation?tex=O(n)%20">，时间复杂度：<img src="https://www.nowcoder.com/equation?tex=O(n)">  </div> <div>  例如：<br> 给定的二叉树是{1,2,3,#,#,4,5}<br> <img alt="" src="https://uploadfiles.nowcoder.com/images/20210717/557336_1626492068888/41FDD435F0BA63A57E274747DE377E05" style="height: auto;width: 250.6px;"><br> 该二叉树之字形层序遍历的结果是 </div> <div>  <div>   [  </div>  <div>   [1],  </div>  <div>   [3,2],  </div>  <div>   [4,5]  </div>  <div>   ]  </div> </div>',
      difficulty: 3,
      samples: [
        {
          input: "{1,2,3,#,#,4,5}",
          note: "如题面解释，第一层是根节点，从左到右打印结果，第二层从右到左，第三层从左到右。    ",
          output: "[[1],[3,2],[4,5]]"
        },
        {
          input: "{8,6,10,5,7,9,11}",
          note: "",
          output: "[[8],[10,6],[5,7,9,11]]"
        },
        {
          input: "{1,2,3,4,5}",
          note: "",
          output: "[[1],[3,2],[4,5]]"
        }
      ],
      title: "按之字形顺序打印二叉树",
      categories: ["栈", "树", "队列"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  给定一棵<span></span>结<span></span>点数为n 二叉搜索树，请找出其中的第 k 小的TreeNode结点值。 </div> <div>  1.返回第k小的节点值即可 </div> <div>  2.不能查找的情况，如二叉树为空，则返回-1，或者k大于n等等，也返回-1 </div> <div>  3.保证n个节点的值不一样 </div> <div>  <div>   <br>  </div> </div> <div>  <br> </div> <div>  数据范围： <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20n%20%20%20%5Cle1000">，<img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20k%20%20%20%5Cle1000">，树上每个结点的值满足<img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20val%20%5Cle%201000"><br> 进阶：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)"><br> </div> <div>  <span><br> </span>  </div> <div>  <br> </div> <div> </div> <div>  <span>如输入{5,3,7,2,4,6,8},3时，二叉树<span>{5,3,7,2,4,6,8}如下图所示：</span></span>  </div> <div>  <span><span><img alt="" src="https://uploadfiles.nowcoder.com/images/20211117/392807_1637120852509/F732B49BA33ECC72FF97FF7BDE2ACF69" style="height: auto;width: 442.0px;"><br> </span></span>  </div> <div>  <span><span><span style="color: rgb(102,102,102);">该二叉树所有节点按结点值升序排列后可得[2,3,4,5,6,7,8]，所以第3个结点的结点值为4，故返回对应结点值为4的结点即可。</span><br> </span></span>  </div> <div>  <span><span><span></span><br> </span></span>  </div>',
      difficulty: 3,
      samples: [
        {
          input: "{5,3,7,2,4,6,8},3",
          note: "",
          output: "4\n"
        },
        {
          input: "{},1",
          note: "",
          output: "-1\n"
        }
      ],
      title: "二叉搜索树的第k个节点",
      categories: ["树", "dfs", "递归"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<span></span>  <div>  给定节点数为 n 的二叉树的前序遍历和中序遍历结果，请重建出该二叉树<span>并返回它的头结点。</span>  </div> <div>  例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建出如下图所示。 </div> <div>  <img alt="" src="https://uploadfiles.nowcoder.com/images/20210717/557336_1626504921458/776B0E5E0FAD11A6F15004B29DA5E628"><br> </div> <div>  <br> </div> <div>  提示: </div> <div>  <span style="color: rgb(38,38,38);">1.vin.length == </span><span style="color: rgb(38,38,38);">pre</span><span style="color: rgb(38,38,38);">.length</span>  </div> <div>  <span style="color: rgb(38,38,38);">2.pre 和 vin 均无重复元素</span>  </div> <div>  <span style="color: rgb(38,38,38);">3.vin出现的元素均出现在 pre里</span>  </div> <div>  <span style="color: rgb(38,38,38);">4.只需要返回根结点，系统会自动输出整颗树做答案对比</span>  </div> <div>  <span style="color: rgb(38,38,38);">数据范围：<img src="https://www.nowcoder.com/equation?tex=n%20%5Cle%202000">，节点的值 <img src="https://www.nowcoder.com/equation?tex=-10000%20%5Cle%20val%20%5Cle%2010000"></span>  </div> <div>  <span style="color: rgb(38,38,38);">要求：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)"></span>  </div>',
      difficulty: 3,
      samples: [
        {
          input: "[1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6]",
          note: "返回根节点，系统会输出整颗二叉树对比结果，重建结果如题面图示    ",
          output: "{1,2,3,4,#,5,6,#,7,#,#,8}"
        },
        {
          input: "[1],[1]",
          note: "",
          output: "{1}"
        },
        {
          input: "[1,2,3,4,5,6,7],[3,2,4,1,6,5,7]",
          note: "",
          output: "{1,2,5,3,4,6,7}\n"
        }
      ],
      title: "重建二叉树",
      categories: ["树", "dfs", "数组"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  输入两棵二叉树A，B，判断B是不是A的子结构。（我们约定空树不是任意一个树的子结构） </div> <div>  假如给定A为{8,8,7,9,2,#,#,#,#,4,7}，B为{8,9,2}，2个树的结构如下，可以看出B是A的子结构<br> </div> <div>  <img alt="" src="https://uploadfiles.nowcoder.com/images/20211027/557336_1635320187489/B1C70B05B2BA3AAA854EE032F2A8D826" style="height: auto;width: 442.0px;">  </div> <div>  <br> </div> <div>  数据范围: </div> <div>  <span style="color: rgb(69,77,89);">0 &lt;= A的节点个数 &lt;= 10000</span>  </div> <div>  <span style="color: rgb(69,77,89);">0 &lt;= B的节点个数 &lt;= 10000</span><br> </div>',
      difficulty: 3,
      samples: [
        {
          input: "{8,8,7,9,2,#,#,#,#,4,7},{8,9,2}",
          note: "",
          output: "true"
        },
        {
          input: "{1,2,3,4,5},{2,4}",
          note: "",
          output: "true"
        },
        {
          input: "{1,2,3},{3,1}",
          note: "",
          output: "false"
        }
      ],
      title: "树的子结构",
      categories: ["二叉树", "树"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  操<span></span>作给定的二叉树，将其变换为源二叉树的镜像。 </div> <div>  数据范围：二叉树的节点数 <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20n%20%5Cle%201000"> ， 二叉树每个节点的值 <img src="https://www.nowcoder.com/equation?tex=0%5Cle%20val%20%5Cle%201000%20">  </div> <div>  要求： 空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)"> 。本题也有原地操作，即空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)"> 的解法，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">  </div> <div>  <br> </div> <div>  比如： </div> <div>  <span> 源二叉树</span><br> </div> <div>  <img alt="" src="https://uploadfiles.nowcoder.com/images/20210922/382300087_1632302001586/420B82546CFC9760B45DD65BA9244888">  </div> <div>  镜像二叉树 </div> <div>  <img alt="" src="https://uploadfiles.nowcoder.com/images/20210922/382300087_1632302036250/AD8C4CC119B15070FA1DBAA1EBE8FC2A"><br> </div>',
      difficulty: 2,
      samples: [
        {
          input: "{8,6,10,5,7,9,11}",
          note: "如题面所示    ",
          output: "{8,10,6,11,9,7,5}"
        },
        {
          input: "{}",
          note: "",
          output: "{}"
        }
      ],
      title: "二叉树的镜像",
      categories: ["树"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  不分行从上往下打印出二叉树的每个节点，同层节点从左至右打印。例如输入{8,6,10,#,#,2,1}，如以下图中的示例二叉树，则依次打印8,6,10,2,1(空节点不打印，跳过)，请你将打印的结果存放到一个数组里面，返回。 </div> <div>  <img alt="" src="https://uploadfiles.nowcoder.com/images/20211029/557336_1635477973725/6C502E0240CAC668843969AFF396B5E4" style="height: auto;width: 338.4px;"><br> </div> <div>  数据范围: </div> <div>  0&lt;=节点总数&lt;=1000 </div> <div>  -1000&lt;=节点值&lt;=1000 </div>',
      difficulty: 2,
      samples: [
        {
          input: "{8,6,10,#,#,2,1}",
          note: "",
          output: "[8,6,10,2,1]"
        },
        {
          input: "{5,4,#,3,#,2,#,1}",
          note: "",
          output: "[5,4,3,2,1]\n"
        }
      ],
      title: "从上往下打印二叉树",
      categories: ["队列", "树"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则返回 true ,否则返回 false 。假设输入的数组的任意两个数字都互不相同。 </div> <div>  <br> </div> <div>  数据范围： 节点数量 <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20n%20%5Cle%201000"> ，节点上的值满足 <img src="https://www.nowcoder.com/equation?tex=1%20%5Cle%20%20val%20%5Cle%2010%5E%7B5%7D"> ，保证节点上的值各不相同<br> 要求：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)"> ，时间时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n%5E2)"><br> </div> <div>  提示： </div> <div>  1.二叉搜索树是指父亲节点大于左子树<span style="color: rgb(102,102,102);">中的全部</span>节点，但是小于右子树<span style="color: rgb(102,102,102);">中的全部</span>节点的树。 </div> <div>  2.该题我们约定空树不是二叉搜索树 </div> <div>  3.后序遍历是指按照 “左子树-右子树-根节点” 的顺序遍历 </div> <div>  4.参考下面的二叉搜索树，示例 1 </div> <div>  <img alt="" src="https://uploadfiles.nowcoder.com/images/20211031/557336_1635645087543/44496AC711FE9478BABD9207180C3423"><br> </div>',
      difficulty: 3,
      samples: [
        {
          input: "[1,3,2]",
          note: "是上图的后序遍历 ，返回true        ",
          output: "true"
        },
        {
          input: "[3,1,2]",
          note: "不属于上图的后序遍历，从另外的二叉搜索树也不能后序遍历出该序列 ，因为最后的2一定是根节点，前面一定是孩子节点，可能是左孩子，右孩子，根节点，也可能是全左孩子，根节点，也可能是全右孩子，根节点，但是[3,1,2]的组合都不能满足这些情况，故返回false   ",
          output: "false"
        },
        {
          input: "[5,7,6,9,11,10,8]",
          note: "",
          output: "true"
        }
      ],
      title: "二叉搜索树的后序遍历序列",
      categories: ["栈", "树"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  <div>   给定一个二叉树root和一个值 sum ，判断是否有从根节点到叶子节点的节点值之和等于 sum 的路径。<br>  </div>  <div>   1.<span style="color: rgb(51,51,51);">该题路径定义为从树的根结点开始往下一直到叶子结点所经过的结点</span>   </div>  <div>   <span style="color: rgb(51,51,51);">2.<span style="color: rgb(51,51,51);">叶子节点是指没有子节点的节点</span></span>   </div>  <div>   <span style="color: rgb(51,51,51);">3.<span style="color: rgb(51,51,51);">路径只能从父节点到子节点，不能从子节点到父节点</span></span>   </div>  <div>   <span style="color: rgb(51,51,51);"><span style="color: rgb(51,51,51);">4.总节点数目为n</span></span>   </div>  <div>   <br> 例如：<br> 给出如下的二叉树，<img src="https://www.nowcoder.com/equation?tex=%5C%20sum%3D22">，<br> <span><img alt="" src="https://uploadfiles.nowcoder.com/images/20200807/999991351_1596786493913_8BFB3E9513755565DC67D86744BB6159" style="height: auto;width: 213.6px;"></span><span></span><br> 返回true，因为存在一条路径 <img src="https://www.nowcoder.com/equation?tex=5%5Cto%204%5Cto%2011%5Cto%202">的节点值之和为 22 <br>  </div> </div> <div>  <br> </div> <div>  数据范围： </div> <div>  1.树上的节点数满足 <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20n%20%5Cle%2010000">  </div> <div>  2.每 个节点的值都满足 <img src="https://www.nowcoder.com/equation?tex=%7Cval%7C%20%5Cle%201000"><br> </div> <div>  要求：<span>空间复杂度 </span><img alt="" src="https://www.nowcoder.com/equation?tex=O(n)"><span>，时间复杂度 </span><img src="https://www.nowcoder.com/equation?tex=O(n)">  </div> <div>  进阶：空间复杂度 <img alt="" src="https://www.nowcoder.com/equation?tex=O(%E6%A0%91%E7%9A%84%E9%AB%98%E5%BA%A6)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)"><br> </div>',
      difficulty: 2,
      samples: [
        {
          input: "{5,4,8,1,11,#,9,#,#,2,7},22",
          note: "",
          output: "true"
        },
        {
          input: "{1,2},0",
          note: "",
          output: "false\n"
        },
        {
          input: "{1,2},3",
          note: "",
          output: "true"
        },
        {
          input: "{},0",
          note: "",
          output: "false\n"
        }
      ],
      title: "二叉树中和为某一值的路径(一)",
      categories: ["树", "dfs"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  输入一颗二叉树的根节点root和一个整数expectNumber，找出二叉树中结点值的和为expectNumber的所有路径。  <div style="color: rgb(102,102,102);">   1.<span style="color: rgb(51,51,51);">该题路径定义为从树的根结点开始往下一直到叶子结点所经过的结点</span>   </div>  <div style="color: rgb(102,102,102);">   <span style="color: rgb(51,51,51);">2.<span>叶子节点是指没有子节点的节点</span></span>   </div>  <div style="color: rgb(102,102,102);">   <span style="color: rgb(51,51,51);">3.<span>路径只能从父节点到子节点，不能从子节点到父节点</span></span>   </div>  <div style="color: rgb(102,102,102);">   <span style="color: rgb(51,51,51);">4.总节点数目为n</span>   </div> </div> <div style="color: rgb(102,102,102);">  <span style="color: rgb(51,51,51);"><br> </span>  </div> <div>  如二叉树root为{10,5,12,4,7},expectNumber为22 </div> <div>  <img alt="" src="https://uploadfiles.nowcoder.com/images/20210929/557336_1632915294911/0A4B8F161306A7054899D42C0C6937FD" style="height: auto;width: 263.2px;">  </div> <div>  则合法路径有[[10,5,7],[10,12]]<br> </div> <div>  <br> </div> <div>  数据范围: </div> <div>  <span style="color: rgb(33,40,53);">树中节点总数在范围 [0, 5000] 内</span>  </div> <div>  <span style="color: rgb(33,40,53);">-1000 &lt;= 节点值 &lt;= 1000</span>  </div> <div>  <span style="color: rgb(33,40,53);">-1000 &lt;= <span>expectNumber</span> &lt;= 1000</span><span style="color: rgb(33,40,53);"></span> </div>',
      difficulty: 3,
      samples: [
        {
          input: "{10,5,12,4,7},22",
          note: "返回[[10,12],[10,5,7]]也是对的      ",
          output: "[[10,5,7],[10,12]]\n"
        },
        {
          input: "{10,5,12,4,7},15",
          note: "",
          output: "[]"
        },
        {
          input: "{2,3},0",
          note: "",
          output: "[]"
        },
        {
          input: "{1,3,4},7",
          note: "",
          output: "[]"
        }
      ],
      title: "二叉树中和为某一值的路径(二)",
      categories: ["树"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。如下图所示 </div> <div>  <img alt="" src="https://uploadfiles.nowcoder.com/images/20210605/557336_1622886924427/E1F1270919D292C9F48F51975FD07CE2" style="height: auto;width: 972.4px;"><br> </div> <div>  <br> </div> <div>  数据范围：输入二叉树的节点数 <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20n%20%5Cle%201000">，二叉树中每个节点的值 <img src="https://www.nowcoder.com/equation?tex=0%5Cle%20val%20%5Cle%201000"><br> 要求：空间复杂度<img src="https://www.nowcoder.com/equation?tex=O(1)">（即在原树上操作），时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)"><br> </div> <div>  <br> </div> <div>  注意: </div> <div>  1.要求不能创建任何新的结点，只能调整树中结点指针的指向。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继<br> 2.返回链表中的第一个节点的指针<br> 3.函数返回的TreeNode，有左右指针，其实可以看成一个双向链表的数据结构 </div> <div>  4.你不用输出双向链表，<span>程序会根据你的返回值自动打印输出</span>  </div>',
      difficulty: 3,
      samples: [
        {
          input: "{10,6,14,4,8,12,16}",
          note: "输入题面图中二叉树，输出的时候将双向链表的头节点返回即可。    ",
          output:
            "From left to right are:4,6,8,10,12,14,16;From right to left are:16,14,12,10,8,6,4;"
        },
        {
          input: "{5,4,#,3,#,2,#,1}",
          note: "                    5\n                  /\n                4\n              /\n            3\n          /\n        2\n      /\n    1\n树的形状如上图      ",
          output:
            "From left to right are:1,2,3,4,5;From right to left are:5,4,3,2,1;"
        }
      ],
      title: "二叉搜索树与双向链表",
      categories: ["分治"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  输入一棵节点数为 n 二叉树，判断该二叉树是否是平衡二叉树。 </div> <div>  在这里，我们只需要考虑其平衡性，不需要考虑其是不是排序二叉树 </div> <div>  <strong>平衡二叉树</strong><span>（Balanced Binary Tree），具有以下性质：它是一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。</span><br> </div> <div>  样例解释： </div> <div>  <img alt="" src="https://uploadfiles.nowcoder.com/images/20210918/382300087_1631935149594/D55A07912354B3AB7E9F2F5EA27CB7D6"> </div> <div>  样例二叉树如图，为一颗平衡二叉树<br> </div> <div>  <span>注：我们约定空树是平衡二叉树。</span>  </div> <div>  <br> </div> <div>  数据范围：<img src="https://www.nowcoder.com/equation?tex=n%20%5Cle%20100">,树上节点的val值满足 <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20n%20%5Cle%201000">  </div> <div>  要求：空间复杂度<img src="https://www.nowcoder.com/equation?tex=O(1)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">  </div>',
      difficulty: 2,
      samples: [
        {
          input: "{1,2,3,4,5,6,7}",
          note: "",
          output: "true"
        },
        {
          input: "{}",
          note: "",
          output: "true\n"
        }
      ],
      title: "判断是不是平衡二叉树",
      categories: ["树", "dfs"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  给定一个二叉树其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的next指针。下图为一棵有9个节点的二叉树。树中从父节点指向子节点的指针用实线表示，从子节点指向父节点的用虚线表示 </div> <div>  <img alt="" src="https://uploadfiles.nowcoder.com/images/20210616/557336_1623844408327/D03B8D5BB902D4516BB92CB216E58EC4">  </div> <div>  <br> </div> <div>  示例: </div> <div>  输入:{8,6,10,5,7,9,11},8 </div> <div>  返回:9 </div> <div>  解析:这个组装传入的子树根节点，其实就是整颗树，中序遍历{5,6,7,8,9,10,11}，根节点8的下一个节点就是9，应该返回{9,10,11}，后台只打印子树的下一个节点，所以只会打印9，如下图，其实都有指向左右孩子的指针，还有指向父节点的指针，下图没有画出来 </div> <div>  <img alt="" src="https://uploadfiles.nowcoder.com/images/20210616/557336_1623845692021/E647707AEF2A4AE2C40F0FCCB549B6A5">  </div> <div>  数据范围：节点数满足 <img src="https://www.nowcoder.com/equation?tex=1%20%5Cle%20n%20%5Cle%2050%20%5C"> ，节点上的值满足 <img src="https://www.nowcoder.com/equation?tex=1%20%5Cle%20val%20%5Cle%20100%20%5C"><br> <br> 要求：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)%20%5C"> ，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)%5C"><br> </div>',
      difficulty: 3,
      samples: [
        {
          input: "{8,6,10,5,7,9,11},8\n",
          note: "",
          output: "9\n"
        },
        {
          input: "{8,6,10,5,7,9,11},6\n",
          note: "",
          output: "7\n"
        },
        {
          input: "{1,2,#,#,3,#,4},4\n",
          note: "",
          output: "1\n"
        },
        {
          input: "{5},5\n",
          note: '不存在，后台打印"null"  ',
          output: '"null"\n'
        }
      ],
      title: "二叉树的下一个结点",
      categories: ["树"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<span>给定一棵二叉树，判断其是否是自身的镜像（即：是否对称）</span><br> <span>例如：                                 下面这棵二叉树是对称的</span><br> <img alt="" src="https://uploadfiles.nowcoder.com/images/20210926/382300087_1632642756706/A22A794C036C06431E632F9D5E2E298F"><br> <span>下面这棵二叉树不对称。</span><br> <img alt="" src="https://uploadfiles.nowcoder.com/images/20210926/382300087_1632642770481/3304ABDD147D8E140B2CEF3201BD8372"><br> <div>  数据范围：节点数满足 <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20n%20%5Cle%201000">，节点上的值满足 <img src="https://www.nowcoder.com/equation?tex=%7Cval%7C%20%5Cle%201000">  </div> <div>  要求：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">  </div> <div>  备注： </div> <span>你可以用递归和迭代两种方法解决这个问题</span>',
      difficulty: 2,
      samples: [
        {
          input: "{1,2,2,3,4,4,3}",
          note: "",
          output: "true\n"
        },
        {
          input: "{8,6,9,5,7,7,5}",
          note: "",
          output: "false\n"
        }
      ],
      title: "对称的二叉树",
      categories: ["树"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  给定一个节点数为 n 二叉树，要求从上到下按层打印二叉树的 val 值，同一层结点从左至右输出，每一层输出一行，将输出的结果存放到一个二维数组中返回。 </div> <div>  <div>   例如：<br> 给定的二叉树是{1,2,3,#,#,4,5}<br> <img alt="" src="https://uploadfiles.nowcoder.com/images/20210717/557336_1626492068888/41FDD435F0BA63A57E274747DE377E05" style="height: auto;width: 250.6px;"><br> 该二叉树多行打印层序遍历的结果是  </div>  <div>   <div>    [   </div>   <div>    [1],   </div>   <div>    [2,3],   </div>   <div>    [4,5]   </div>   <div>    ]   </div>  </div> <br> </div> <div>  数据范围：二叉树的节点数 <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20n%20%5Cle%201000">，<img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20val%20%5Cle%201000">  </div> <div>  要求：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">  </div>',
      difficulty: 3,
      samples: [
        {
          input: "{1,2,3,#,#,4,5}",
          note: "",
          output: "[[1],[2,3],[4,5]]"
        },
        {
          input: "{8,6,10,5,7,9,11}",
          note: "",
          output: "[[8],[6,10],[5,7,9,11]]"
        },
        {
          input: "{1,2,3,4,5}",
          note: "",
          output: "[[1],[2,3],[4,5]]"
        },
        {
          input: "{}",
          note: "",
          output: "[]\n"
        }
      ],
      title: "把二叉树打印成多行",
      categories: ["树", "广度优先搜索(BFS)"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  请实现两个函数，分别用来序列化和反序列化二叉树，不对序列化之后的字符串进行约束，但要求能够根据序列化之后的字符串重新构造出一棵与原二叉树相同的树。 </div> <div>  <br> </div> <div>  <span>二叉树的序列化(<span>Serialize)</span>是指：把一棵二叉树按照某种遍历方式的结果以某种格式保存为字符串，从而使得内存中建立起来的二叉树可以持久保存。序列化可以基于先序、中序、后序、层序的二叉树等遍历方式来进行修改，序列化的结果是一个字符串，序列化时通过 某种符号表示空节点（#）<br> <br> 二叉树的反序列化(Deserialize)是指：根据某种遍历顺序得到的序列化字符串结果str，重构二叉树。</span>  </div> <div>  <span><br> </span>  </div> <div>  <span>例如，可以根据层序遍历的方案序列化，如下图:</span>  </div> <div>  <span><img alt="" src="https://uploadfiles.nowcoder.com/images/20210910/557336_1631245540483/320409CB186FCD18144519959D510D7E"></span>  </div> <div>  <span></span>  </div> <div>  <span><span>层序序列化(即用函数Serialize转化)如上的二叉树转为&quot;{1,2,3,#,#,6,7}&quot;</span>，再能够调用反序列化(<span>Deserialize)将&quot;<span>{1,2,3,#,#,6,7}</span>&quot;</span>构造成如上的二叉树。</span>  </div> <div>  <span><br> </span>  </div> <div>  <span>当然你也可以根据满二叉树结点位置的标号规律来序列化，还可以根据先序遍历和中序遍历的结果来序列化。</span>不对序列化之后的字符串进行约束，所以欢迎各种奇思妙想。 </div> <div>  <br> </div> <div>  数据范围：节点数 <img src="https://www.nowcoder.com/equation?tex=n%20%5Cle%20100">，树上每个节点的值满足 <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20val%20%5Cle%20150">  </div> <div>  要求：序列化和反序列化都是空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">  </div> <div> </div>',
      difficulty: 4,
      samples: [
        {
          input: "{1,2,3,#,#,6,7}",
          note: "如题面图   ",
          output: "{1,2,3,#,#,6,7}"
        },
        {
          input: "{8,6,10,5,7,9,11}",
          note: "",
          output: "{8,6,10,5,7,9,11}\n"
        }
      ],
      title: "序列化二叉树",
      categories: ["队列", "树"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  给定一个二叉树root和一个整数值 sum ，求该树有多少路径的的节点值之和等于 sum 。 </div> <div>  <div>   1.<span style="color: rgb(51,51,51);">该题路径定义不需要从根节点开始，也不需要在叶子节点结束，但是一定是从父亲节点往下到孩子节点</span>  </div>  <div>   <span style="color: rgb(51,51,51);">2.总节点数目为n</span>   </div>  <div>   <span style="color: rgb(51,51,51);">3.保证最后返回的路径个数在整形范围内(即路径个数小于2<sup>31</sup>-1)</span>   </div>  <div>   <br>  </div>  <div>   数据范围:  </div>  <div>   <img alt="" src="https://www.nowcoder.com/equation?tex=0%3C%3Dn%3C%3D1000"><br>  </div>  <div>   <img alt="" src="https://www.nowcoder.com/equation?tex=-10%5E9%3C%3D%E8%8A%82%E7%82%B9%E5%80%BC%3C%3D10%5E9"><br>  </div>  <div>   <br>  </div>  <div>   假如二叉树root为{1,2,3,4,5,4,3,#,#,-1}，sum=6，那么总共如下所示，有3条路径符合要求  </div>  <div>   <img alt="" src="https://uploadfiles.nowcoder.com/images/20211103/301499_1635923010369/C47185D4980F108BC73F790D8D2F6709" style="height: auto;width: 442.0px;"><br>  </div> </div>',
      difficulty: 3,
      samples: [
        {
          input: "{1,2,3,4,5,4,3,#,#,-1},6",
          note: "如图所示，有3条路径符合      ",
          output: "3"
        },
        {
          input: "{0,1},1",
          note: "",
          output: "2"
        },
        {
          input: "{1,#,2,#,3},3",
          note: "",
          output: "2\n"
        }
      ],
      title: "二叉树中和为某一值的路径(三)",
      categories: ["树"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  <span style="color: rgb(90,103,111);">给定一棵二叉树(保证非空)以及这棵树上的两个节点对应的val值 o1 和 o2，请找到 o1 和 o2 的最近公共祖先节点。 </span>  </div> <div>  <span style="color: rgb(90,103,111);"><br> </span>  </div> <div>  <span style="color: rgb(90,103,111);">数据范围：<img src="https://www.nowcoder.com/equation?tex=1%20%5Cle%20n%20%5Cle%201000%20">，树上每个节点的val满足 <img src="https://www.nowcoder.com/equation?tex=0%3Cval%20%5Cle%20100"></span>  </div> <div>  <span style="color: rgb(90,103,111);">要求：时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)"></span>  </div> <div>  <span style="color: rgb(90,103,111);"><br> </span>  </div> <div>  <span style="color: rgb(90,103,111);">注：本题保证二叉树中每个节点的val值均不相同。</span>  </div> <div>  <span style="color: rgb(90,103,111);"><br> </span>  </div> <div>  <span style="color: rgb(90,103,111);">如当输入[3,5,1,6,2,0,8,#,#,7,4],5,1时，二叉树{<span style="color: rgb(90,103,111);">3,5,1,6,2,0,8,#,#,7,4</span>}如下图所示：</span>  </div> <div>  <span style="color: rgb(90,103,111);"><span><img alt="" src="https://uploadfiles.nowcoder.com/images/20211014/423483716_1634206667843/D2B5CA33BD970F64A6301FA75AE2EB22" style="height: auto;width: 520.8px;"></span></span>  </div> <div>  <span style="color: rgb(90,103,111);"><span><span style="color: rgb(90,103,111);">所以节点值为5和节点值为1的节点的最近公共祖先节点的节点值为3，所以对应的输出为3。</span><br> </span></span>  </div> <div>  <span style="color: rgb(90,103,111);"><span><span style="color: rgb(90,103,111);">节点本身可以视为自己的祖先</span></span></span> </div>',
      difficulty: 3,
      samples: [
        {
          input: "[3,5,1,6,2,0,8,#,#,7,4],5,1",
          note: "",
          output: "3\n"
        }
      ],
      title: "在二叉树中找到两个节点的最近公共祖先",
      categories: ["树"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  <span style="color: rgb(33,40,53);">给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。</span>  </div> <div>  <span style="color: rgb(33,40,53);">1.对于该题的最近的公共祖先定义:对于有根树T的两个节点p、q，最近公共祖先LCA(T,p,q)表示一个<span style="color: rgb(33,40,53);">节</span>点x，满足x是p和q的祖先且x的深度尽可能大。在这里，一个节点也可以是它自己的祖先.</span>  </div> <div>  <span style="color: rgb(33,40,53);">2.二叉搜索树是若它的左子树不空，则左子树上所有节点的值均小于它的根节点的值； 若它的右子树不空，则右子树上所有节点的值均大于它的根节点的值</span>  </div> <div>  <span style="color: rgb(33,40,53);">3.</span><span style="color: rgb(33,40,53);">所有节点的值都是唯一的。</span>  </div> <div>  <span style="color: rgb(33,40,53);">4.p、q 为不同节点且均存在于给定的二叉搜索树中。</span><span style="color: rgb(33,40,53);"><br> </span><span style="color: rgb(33,40,53);"></span>  </div> <div>  <span style="color: rgb(33,40,53);">数据范围:</span>  </div> <div>  <span style="color: rgb(33,40,53);">3&lt;=节点总数&lt;=10000</span>  </div> <div>  <span style="color: rgb(33,40,53);">0&lt;=节点值&lt;=10000</span>  </div> <div>  <span style="color: rgb(33,40,53);"><br> </span>  </div> <div>  <span style="color: rgb(33,40,53);">如果给定以下搜索二叉树: {7,1,12,0,4,11,14,#,#,3,5}，如下图:</span>  </div> <div>  <span style="color: rgb(33,40,53);"><img alt="" src="https://uploadfiles.nowcoder.com/images/20211110/301499_1636536407371/36404CF45DDCB5834FC8BBFEA318831A" style="height: auto;width: 449.4px;"><br> </span>  </div> <div>  <span style="color: rgb(33,40,53);"><br> </span>  </div>',
      difficulty: 3,
      samples: [
        {
          input: "{7,1,12,0,4,11,14,#,#,3,5},1,12",
          note: "节点1 和 节点12的最近公共祖先是7  ",
          output: "7\n"
        },
        {
          input: "{7,1,12,0,4,11,14,#,#,3,5},12,11",
          note: "因为一个节点也可以是它自己的祖先.所以输出12  ",
          output: "12\n"
        }
      ],
      title: "二叉搜索树的最近公共祖先",
      categories: ["树", "递归"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  用两个栈来实现一个队列，使用n个元素来完成 n 次在队列尾部插入整数(push)和n次在队列头部删除整数(pop)的功能。 队列中的元素为int类型。保证操作合法，即保证pop操作时队列内已有元素。 </div> <div>  <br> </div> <div>  数据范围： <img src="https://www.nowcoder.com/equation?tex=n%5Cle1000">  </div> <div>  要求：存储n个元素的空间复杂度为 <img src="https://www.nowcoder.com/equation?tex=O(n)"> ，插入与删除的时间复杂度都是 <img src="https://www.nowcoder.com/equation?tex=O(1)"><span></span>  </div>',
      difficulty: 2,
      samples: [
        {
          input: '["PSH1","PSH2","POP","POP"]',
          note: '"PSH1":代表将1插入队列尾部\n"PSH2":代表将2插入队列尾部\n"POP“:代表删除一个元素，先进先出=>返回1\n"POP“:代表删除一个元素，先进先出=>返回2   ',
          output: "1,2"
        },
        {
          input: '["PSH2","POP","PSH1","POP"]\n',
          note: "",
          output: "2,1\n"
        }
      ],
      title: "用两个栈实现队列",
      categories: ["栈"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的 min 函数，输入操作时保证 pop<span style="color: rgb(33,40,53);">、</span>top<span style="color: rgb(33,40,53);"> 和 </span><span>min</span><span style="color: rgb(33,40,53);"> 函数操作时，栈中一定有元素。</span>  </div> <div>  <br> </div> <div>  此栈包含的方法有： </div> <div>  push(value):将value压入栈中 </div> <div>  pop():弹出栈顶元素 </div> <div>  top():获取栈顶元素 </div> <div>  min():获取栈中最小元素 </div> <div>  <br> </div> <div>  数据范围：操作数量满足 <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20n%20%5Cle%20300%20%5C"> ，输入的元素满足 <img src="https://www.nowcoder.com/equation?tex=%7Cval%7C%20%5Cle%2010000%20%5C"><br> 进阶：栈的各个操作的时间复杂度是 <img src="https://www.nowcoder.com/equation?tex=O(1)%5C"> ，空间复杂度是 <img src="https://www.nowcoder.com/equation?tex=O(n)%5C"><br> </div> <div>  <br> </div> <div>  示例: </div> <div>  输入:    [&quot;PSH-1&quot;,&quot;PSH2&quot;,&quot;MIN&quot;,&quot;TOP&quot;,&quot;POP&quot;,&quot;PSH1&quot;,&quot;TOP&quot;,&quot;MIN&quot;] </div> <div>  输出:    -1,2,1,-1 </div> <div>  解析: </div> <div>  <span>&quot;PSH-1&quot;表示将-1压入栈中，栈中元素为-1</span>  </div> <div>  <span>&quot;PSH2&quot;表示将2压入栈中，栈中元素为2，-1</span>  </div> <div>  “<span>MIN</span>”表示获取此时栈中最小元素==&gt;返回-1 </div> <div>  <span>&quot;TOP&quot;表示获取栈顶元素==&gt;返回2</span>  </div> <div>  &quot;POP&quot;表示弹出栈顶元素，弹出2，栈中元素为-1 </div> <div>  <span></span><span>&quot;PSH1&quot;表示将1压入栈中，栈中元素为1，-1</span><br>  <div>   <span>&quot;TOP&quot;表示获取栈顶元素==&gt;返回1</span>   </div>  <div>   <span><span>“</span><span>MIN</span><span>”表示获取此时栈中最小元素==&gt;返回-1</span><br> </span>   </div>  <div>   <br>  </div> </div>',
      difficulty: 2,
      samples: [
        {
          input: ' ["PSH-1","PSH2","MIN","TOP","POP","PSH1","TOP","MIN"]',
          note: "",
          output: "-1,2,1,-1"
        }
      ],
      title: "包含min函数的栈",
      categories: ["栈"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。 </div> <div>  1. 0&lt;=pushV.length == popV.<span>length &lt;=1000</span>  </div> <div>  <span><span style="color: rgb(33,40,53);">2. -1000&lt;=</span><span style="color: rgb(33,40,53);">pushV[i]&lt;=1000</span><br> </span>  </div> <div>  <span>3. <span></span></span><span style="color: rgb(33,40,53);">pushV</span><span style="color: rgb(33,40,53);"> 的所有数字均不相同</span>  </div> <div> </div>',
      difficulty: 3,
      samples: [
        {
          input: "[1,2,3,4,5],[4,5,3,2,1]",
          note: "可以通过push(1)=>push(2)=>push(3)=>push(4)=>pop()=>push(5)=>pop()=>pop()=>pop()=>pop()\n这样的顺序得到[4,5,3,2,1]这个序列，返回true      ",
          output: "true"
        },
        {
          input: "[1,2,3,4,5],[4,3,5,1,2]",
          note: "由于是[1,2,3,4,5]的压入顺序，[4,3,5,1,2]的弹出顺序，要求4，3，5必须在1，2前压入，且1，2不能弹出，但是这样压入的顺序，1又不能在2之前弹出，所以无法形成的，返回false      ",
          output: "false\n"
        }
      ],
      title: "栈的压入、弹出序列",
      categories: ["栈"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  牛客最近来了一个新员工Fish，每天早晨总是会拿着一本英文杂志，写些句子在本子上。同事Cat对Fish写的内容颇感兴趣，有一天他向Fish借来翻看，但却读不懂它的意思。例如，“nowcoder. a am I”。后来才意识到，这家伙原来把句子单词的顺序翻转了，正确的句子应该是“I am a nowcoder.”。Cat对一一的翻转这些单词顺序可不在行，你能帮助他么？ </div> <div>  <br> </div> <div>  数据范围：<img src="https://www.nowcoder.com/equation?tex=1%20%5Cle%20n%20%5Cle%20100%20%5C"><br> 进阶：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)%20%5C"> ，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)%20%5C"> ，保证没有只包含空格的字符串<br> </div>',
      difficulty: 4,
      samples: [
        {
          input: '"nowcoder. a am I"',
          note: "",
          output: '"I am a nowcoder."'
        },
        {
          input: '""',
          note: "",
          output: '""'
        }
      ],
      title: "翻转单词序列",
      categories: ["字符串"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  给定一个长度为 n 的数组 num 和滑动窗口的大小 size ，找出所有滑动窗口里数值的最大值。 </div> <div>  <br> </div> <div>  例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，那么一共存在6个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}； 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个：      {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}，      {2,3,[4,2,6],2,5,1}，      {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}，      {2,3,4,2,6,[2,5,1]}。 </div> <div>  <br> </div> <div>  <span style="color: rgb(51,51,51);">窗口大于数组长度或窗口长度为0的时候，返回空。</span><br> </div> <div>  <span style="color: rgb(51,51,51);"><br> </span>  </div> <div>  <div style="color: rgb(102,102,102);">   数据范围： <img src="https://www.nowcoder.com/equation?tex=1%20%5Cle%20n%20%5Cle%2010000">，<img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20size%20%5Cle%2010000">，数组中每个元素的值满足 <img src="https://www.nowcoder.com/equation?tex=%7Cval%7C%20%5Cle%2010000"><span></span>  </div>  <div style="color: rgb(102,102,102);">   要求：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">   </div> <span></span><br> </div> <div>  <span style="color: rgb(51,51,51);"><br> </span>  </div>',
      difficulty: 4,
      samples: [
        {
          input: "[2,3,4,2,6,2,5,1],3",
          note: "",
          output: "[4,4,6,6,6,5]"
        },
        {
          input: "[9,10,9,-7,-3,8,2,-6],5",
          note: "",
          output: "[10,10,9,8]"
        },
        {
          input: "[1,2,3,4],5",
          note: "",
          output: "[]"
        }
      ],
      title: "滑动窗口的最大值",
      categories: ["堆", "双指针", "队列"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  给定一个长度为 n 的非降序数组和一个非负数整数 k ，要求统计 k 在数组中出现的次数 </div> <div>  <br> </div> <div>  数据范围：<img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20n%20%5Cle%201000%20%2C%200%20%5Cle%20k%20%5Cle%20100">，数组中每个元素的值满足 <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20val%20%5Cle%20100"><span></span><br> 要求：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(logn)"><br> </div>',
      difficulty: 2,
      samples: [
        {
          input: "[1,2,3,3,3,3,4,5],3",
          note: "",
          output: "4"
        },
        {
          input: "[1,3,4,5],6",
          note: "",
          output: "0"
        }
      ],
      title: "数字在升序数组中出现的次数",
      categories: ["数组", "二分"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  在一个二维数组array中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。 </div> <div>  [ </div> <div>  [1,2,8,9],<br> [2,4,9,12],<br> [4,7,10,13],<br> [6,8,11,15]<br> </div> <div>  ] </div> <div>  <p style="color: rgb(38,38,38);">   给定 target = 7，返回 true。  </p>  <div style="color: rgb(38,38,38);">   给定 target = 3，返回 false。  </div>  <div style="color: rgb(38,38,38);">   <br>  </div>  <div style="color: rgb(38,38,38);">   数据范围：矩阵的长宽满足 <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20n%2Cm%20%5Cle%20%20500"> ， 矩阵中的值满足 <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20val%20%5Cle%2010%5E9"><br> 进阶：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)"> ，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n%2Bm)"><br>  </div> </div>',
      difficulty: 3,
      samples: [
        {
          input: "7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]",
          note: "存在7，返回true   ",
          output: "true"
        },
        {
          input: "1,[[2]]",
          note: "",
          output: "false"
        },
        {
          input: "3,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]",
          note: "不存在3，返回false   ",
          output: "false"
        }
      ],
      title: "二维数组中的查找",
      categories: ["数组"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '有一个长度为 n 的非降序数组，比如[1,2,3,4,5]，将它进行旋转，即把一个数组最开始的若干个元素搬到数组的末尾，变成一个旋转数组，比如变成了[3,4,5,1,2]，或者<span>[4,5,1,2,3]</span>这样的。请问，给定这样一个旋转数组，求数组中的最小值。<br> <div>  <br> </div> <div>  数据范围：<img src="https://www.nowcoder.com/equation?tex=1%20%5Cle%20%20n%20%5Cle%2010000">，数组中任意元素的值: <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20val%20%5Cle%2010000">  </div> <div>  要求：空间复杂度：<img src="https://www.nowcoder.com/equation?tex=O(1)"> ，时间复杂度：<img src="https://www.nowcoder.com/equation?tex=O(logn)">  </div>',
      difficulty: 2,
      samples: [
        {
          input: "[3,4,5,1,2]",
          note: "",
          output: "1"
        },
        {
          input: "[3,100,200,3]",
          note: "",
          output: "3\n"
        }
      ],
      title: "旋转数组的最小数字",
      categories: ["二分"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  输入一个长度为 n 字符串，打印出该字符串中字符的所有排列，你可以以任意顺序返回这个字符串数组。 </div> <div>  例如输入字符串ABC,则输出由字符A,B,C所能排列出来的所有字符串ABC,ACB,BAC,BCA,CBA和CAB。 </div> <div>  <img alt="" src="https://uploadfiles.nowcoder.com/images/20211008/557336_1633676660853/6226390B4185DB132AFFDB10F09F8BEB" style="height: auto;width: 618.8px;"><br> </div> <div>  数据范围：<img src="https://www.nowcoder.com/equation?tex=n%20%3C%2010"><br> 要求：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n!)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n!)"><br> </div> <div>  <div>  </div> </div>',
      difficulty: 3,
      samples: [
        {
          input: '"ab"',
          note: '返回["ba","ab"]也是正确的         ',
          output: '["ab","ba"]'
        },
        {
          input: '"aab"',
          note: "",
          output: '["aab","aba","baa"]'
        },
        {
          input: '"abc"',
          note: "",
          output: '["abc","acb","bac","bca","cab","cba"]'
        },
        {
          input: '""',
          note: "",
          output: "[]"
        }
      ],
      title: "字符串的排列",
      categories: ["字符串", "递归"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  数字以 0123456789101112131415... 的格式作为一个字符序列，在这个序列中第 2 位（<strong>从下标 0 开始计算</strong>）是 2 ，第 10 位是 1 ，第 13 位是 1 ，以此类题，请你输出第 n 位对应的数字。 </div> <div>  <br> </div> <div>  数据范围： <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20n%20%5Cle%2010%5E9%20%5C"><br> </div>',
      difficulty: 2,
      samples: [
        {
          input: "0",
          note: "",
          output: "0\n"
        },
        {
          input: "2",
          note: "",
          output: "2\n"
        },
        {
          input: "10",
          note: "",
          output: "1\n"
        },
        {
          input: "13",
          note: "",
          output: "1\n"
        }
      ],
      title: "数字序列中某一位的数字",
      categories: ["模拟"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  输入一个长度为n的整型数组array，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。 </div> <div>  数据范围: </div> <div>  <div style="color: rgb(102,102,102);">   <img src="https://www.nowcoder.com/equation?tex=1%20%3C%3D%20n%20%3C%3D%202%5Ctimes10%5E5"><br>  </div>  <div>   <img alt="" src="https://www.nowcoder.com/equation?tex=-100%20%3C%3D%20a%5Bi%5D%20%3C%3D%20100"><br>  </div> <br> </div> <div>  <span>要求:时间复杂度为 <img alt="" src="https://www.nowcoder.com/equation?tex=O(n)">，空间复杂度为<span> </span><img alt="" src="https://www.nowcoder.com/equation?tex=O(n)"></span>  </div> <div>  <span>进阶:时间复杂度为 <span> </span><img alt="" src="https://www.nowcoder.com/equation?tex=O(n)">，空间复杂度为<span> </span><img alt="" src="https://www.nowcoder.com/equation?tex=O(1)"></span><br> </div> <span></span>',
      difficulty: 2,
      samples: [
        {
          input: "[1,-2,3,10,-4,7,2,-5]",
          note: "经分析可知，输入数组的子数组[3,10,-4,7,2]可以求得最大和为18       ",
          output: "18"
        },
        {
          input: "[2]",
          note: "",
          output: "2"
        },
        {
          input: "[-10]",
          note: "",
          output: "-10\n"
        }
      ],
      title: "连续子数组的最大和",
      categories: ["动态规划", "贪心"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  输入一个长度为n的整型数组array，数组中的一个或连续多个整数组成一个子数组，找到一个具有最大和的连续子数组。 </div> <div>  1.子数组是连续的，比如[1,3,5,7,9]的子数组有[1,3]，[3,5,7]等等，但是[1,3,7]不是子数组 </div> <div>  2.如果存在多个最大和的连续子数组，那么返回其中长度最长的，该题数据保证这个最长的只存在一个 </div> <div>  3.该题定义的子数组的最小长度为1，不存在为空的子数组，即不存在[]是某个数组的子数组 </div> <div>  4.返回的数组不计入空间复杂度计算 </div> <div>  <br> </div> <div>  数据范围: </div> <div>  <div>   <img alt="" src="https://www.nowcoder.com/equation?tex=1%3C%3Dn%3C%3D10%5E5"><br>  </div>  <div>   <img alt="" src="https://www.nowcoder.com/equation?tex=-100%20%3C%3D%20a%5Bi%5D%20%3C%3D%20100"><br>  </div>  <div>   <br>  </div>  <div>   要求:时间复杂度<img alt="" src="https://www.nowcoder.com/equation?tex=O(n)">，空间复杂度<img alt="" src="https://www.nowcoder.com/equation?tex=O(n)">   </div>  <div>   <span>进阶:时间复杂度</span><img alt="" src="https://www.nowcoder.com/equation?tex=O(n)"><span>，空间复杂度</span><img alt="" src="https://www.nowcoder.com/equation?tex=O(1)"><br>  </div> <br> </div> <div>  <br> </div>',
      difficulty: 3,
      samples: [
        {
          input: "[1,-2,3,10,-4,7,2,-5]",
          note: "经分析可知，输入数组的子数组[3,10,-4,7,2]可以求得最大和为18，故返回[3,10,-4,7,2]  ",
          output: "[3,10,-4,7,2]\n"
        },
        {
          input: "[1]",
          note: "",
          output: "[1]\n"
        },
        {
          input: "[1,2,-3,4,-1,1,-3,2]",
          note: "经分析可知，最大子数组的和为4，有[4],[4,-1,1],[1,2,-3,4],[1,2,-3,4,-1,1]，故返回其中长度最长的[1,2,-3,4,-1,1]  ",
          output: "[1,2,-3,4,-1,1]\n"
        },
        {
          input: "[-2,-1]",
          note: "子数组最小长度为1，故返回[-1]  ",
          output: "[-1]\n"
        }
      ],
      title: "连续子数组的最大和(二)",
      categories: ["贪心", "动态规划", "数组"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个 n 级的台阶总共有多少种跳法（先后次序不同算不同的结果）。 </div> <div>  <br> </div> <div>  数据范围：<img src="https://www.nowcoder.com/equation?tex=1%20%5Cleq%20n%20%5Cleq%2040">  </div> <div>  要求：时间复杂度：<img src="https://www.nowcoder.com/equation?tex=O(n)"> ，空间复杂度： <img src="https://www.nowcoder.com/equation?tex=O(1)">  </div>',
      difficulty: 2,
      samples: [
        {
          input: "2",
          note: "青蛙要跳上两级台阶有两种跳法，分别是：先跳一级，再跳一级或者直接跳两级。因此答案为2      ",
          output: "2"
        },
        {
          input: "7",
          note: "",
          output: "21"
        }
      ],
      title: "跳台阶",
      categories: ["递归"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  大家都知道斐波那契数列，现在要求输入一个正整数 n ，请你输出斐波那契数列的第 n 项。 </div> <div>  斐波那契数列是一个满足 <img src="https://www.nowcoder.com/equation?tex=fib(x)%3D%5Cleft%5C%7B%20%5Cbegin%7Barray%7D%7Brcl%7D%201%20%26%20%7Bx%3D1%2C2%7D%5C%5C%20fib(x-1)%2Bfib(x-2)%20%20%26%7Bx%3E2%7D%5C%5C%20%5Cend%7Barray%7D%20%5Cright."> 的数列 </div> <div>  数据范围：<img src="https://www.nowcoder.com/equation?tex=1%5Cleq%20n%5Cleq%2040">  </div> <div>  要求：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)"> ，本题也有时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(logn)"> 的解法 </div> <div>  <br> </div> <div>  <div>  </div> </div>',
      difficulty: 1,
      samples: [
        {
          input: "4",
          note: "根据斐波那契数列的定义可知，fib(1)=1,fib(2)=1,fib(3)=fib(3-1)+fib(3-2)=2,fib(4)=fib(4-1)+fib(4-2)=3，所以答案为3。  ",
          output: "3"
        },
        {
          input: "1",
          note: "",
          output: "1"
        },
        {
          input: "2",
          note: "",
          output: "1\n"
        }
      ],
      title: "斐波那契数列",
      categories: ["数组"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  请实现一个函数用来匹配包括\'.\'和\'*\'的正则表达式。模式中的字符\'.\'表示任意一个字符，而\'*\'表示它前面的字符可以出现任意次（包含0次）。 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串&quot;aaa&quot;与模式&quot;a.a&quot;和&quot;ab*ac*a&quot;匹配，但是与&quot;aa.a&quot;和&quot;ab*a&quot;均不匹配 </div> <div>  <br> </div> <div>  <div>   数据范围:  </div>  <div>   1.<span style="color: rgb(33,40,53);">str 可能为空，且只包含从 a-z 的小写字母。</span>   </div>  <div>   <span style="color: rgb(33,40,53);">2.pattern 可能为空，且只包含从 a-z 的小写字母以及字符 . 和 *，无连续的 \'*\'。</span>   </div>  <div>   <span style="color: rgb(33,40,53);">3.</span><span style="color: rgb(33,40,53);"> 0 &lt;= str.length &lt;= 20</span>   </div>  <div>   <span style="color: rgb(33,40,53);">4. 0 &lt;= pattern.length &lt;= 30</span>   </div> </div> <div>  要求：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">  </div> <div>  <br> </div> <div>  <br> </div> <div>  <br> </div> <div>  <span style="color: rgb(33,40,53);"></span>  </div>',
      difficulty: 4,
      samples: [
        {
          input: '"aaa","a*a"',
          note: "中间的*可以出现任意次的a，所以可以出现1次a，能匹配上        ",
          output: "true"
        },
        {
          input: '"aad","c*a*d"',
          note: '因为这里 c 为 0 个，a被重复一次， * 表示零个或多个a。因此可以匹配字符串 "aad"。        ',
          output: "true"
        },
        {
          input: '"",".*"',
          note: "\".*\" 表示可匹配零个或多个（'*'）任意字符（'.'）        ",
          output: "true"
        },
        {
          input: '"aaab","a*a*a*c"',
          note: "",
          output: "false"
        }
      ],
      title: "正则表达式匹配",
      categories: ["字符串"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶(n为正整数)总共有多少种跳法。 </div> <div>  <br> </div> <div>  数据范围：<img src="https://www.nowcoder.com/equation?tex=1%20%5Cle%20n%20%5Cle%2020"><br> 进阶：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)%20"> ， 时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)"><br> </div>',
      difficulty: 2,
      samples: [
        {
          input: "3",
          note: "",
          output: "4"
        },
        {
          input: "1",
          note: "",
          output: "1\n"
        }
      ],
      title: "跳台阶扩展问题",
      categories: ["动态规划", "递归"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  我们可以用 2*1 的小矩形横着或者竖着去覆盖更大的矩形。请问用 n 个 2*1 的小矩形无重叠地覆盖一个 2*n 的大矩形，从同一个方向看总共有多少<span>种</span>不同的方法？ </div> <div>  <br> </div> <div>  数据范围：<img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20n%20%5Cle%2038%20%5C"><br> 进阶：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)%5C"> ，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)%5C"><br> </div> <div>  <br> </div> <div>  注意：约定 n == 0 时，输出 0 </div> <div>  <br> </div> <div>  比如n=3时，2*3的矩形块有3种不同的覆盖方法(<span>从同一个方向看</span><span></span>)： </div> <div>  <img alt="" src="https://uploadfiles.nowcoder.com/images/20201028/59_1603852524038_7FBC41C976CACE07CB222C3B890A0995"><br> </div>',
      difficulty: 3,
      samples: [
        {
          input: "0",
          note: "",
          output: "0"
        },
        {
          input: "1",
          note: "",
          output: "1"
        },
        {
          input: "4",
          note: "",
          output: "5\n"
        }
      ],
      title: "矩形覆盖",
      categories: ["递归", "动态规划"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  假设你有一个数组prices，长度为n，其中prices[i]是股票在第i<span></span>天的价格，请根据这个价格数组，返回买卖股票能获得的最大收益 </div> <div>  1.你可以买入一次股票和卖出一次股票，并非每天都可以买入或卖出一次，总共只能买入和卖出一次，且买入必须在卖出的前面的某一天 </div> <div>  2.如果不能获取到任何利润，请返回0 </div> <div>  <span>3.假设买入卖出均无手续费</span><br> </div> <div>  <br> </div> <div>  数据范围： <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20n%20%5Cle%2010000%20%2C%200%20%5Cle%20val%20%5Cle%2010000"><br> </div> <div>  要求：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)"><br> </div>',
      difficulty: 2,
      samples: [
        {
          input: "[8,9,2,5,4,7,1]",
          note: "在第3天(股票价格 = 2)的时候买入，在第6天(股票价格 = 7)的时候卖出，最大利润 = 7-2 = 5 ，不能选择在第2天买入，第3天卖出，这样就亏损7了；同时，你也不能在买入前卖出股票。         ",
          output: "5\n"
        },
        {
          input: "[2,4,1]",
          note: "",
          output: "2"
        },
        {
          input: "[3,2,1]",
          note: "",
          output: "0\n"
        }
      ],
      title: "买卖股票的最好时机(一)",
      categories: ["数组", "动态规划"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  在一个<img src="https://www.nowcoder.com/equation?tex=m%5Ctimes%20n">的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？ </div> <div>  如输入这样的一个二维数组，<br> [<br> [1,3,1],<br> [1,5,1],<br> [4,2,1]<br> ]<br> </div> <div>  那么路径 1→3→5→2→1 可以拿到最多价值的礼物，价值为12 </div>',
      difficulty: 3,
      samples: [
        {
          input: "[[1,3,1],[1,5,1],[4,2,1]]",
          note: "",
          output: "12\n"
        }
      ],
      title: "礼物的最大价值",
      categories: ["动态规划", "数组"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  <span style="color: rgb(33,40,53);">请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。</span>  </div> <div>  数据范围: </div> <div>  <img src="https://www.nowcoder.com/equation?tex=%5C%20%5Ctext%7Bs.length%7D%5Cle%2040000"><br> </div>',
      difficulty: 3,
      samples: [
        {
          input: '"abcabcbb"',
          note: '因为无重复字符的最长子串是"abc"，所以其长度为 3。 ',
          output: "3\n"
        },
        {
          input: '"bbbbb"',
          note: '因为无重复字符的最长子串是"b"，所以其长度为 1。 ',
          output: "1\n"
        },
        {
          input: '"pwwkew"',
          note: '因为无重复字符的最长子串是 "wke"，所以其长度为 3。\n请注意，你的答案必须是子串的长度，"pwke" 是一个子序列，不是子串。 ',
          output: "3\n"
        }
      ],
      title: "最长不含重复字符的子字符串",
      categories: ["字符串", "哈希"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<p>  有一种将字母编码成数字的方式：\'a\'-&gt;1, \'b-&gt;2\', ... , \'z-&gt;26\'。 </p> <div>  <span style="color: rgb(51,51,51);">现在给一串数字，返回有多少种可能的译码结果</span>  </div> <div>  <span style="color: rgb(51,51,51);"><br> </span>  </div> <div>  <span style="color: rgb(51,51,51);">数据范围：字符串长度满足 <img src="https://www.nowcoder.com/equation?tex=0%20%3C%20n%20%5Cle%2090"></span>  </div> <div>  <span style="color: rgb(51,51,51);">进阶：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)%20">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)"></span>  </div>',
      difficulty: 3,
      samples: [
        {
          input: '"12"',
          note: "2种可能的译码结果（”ab” 或”l”）  ",
          output: "2\n"
        },
        {
          input: '"31717126241541717"',
          note: "192种可能的译码结果  ",
          output: "192\n"
        }
      ],
      title: "把数字翻译成字符串",
      categories: ["动态规划"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  <span>请设计一个函数，用来判断在一个n乘m的矩阵中是否存在一条包含某长度为len的字符串所有字符的路径。路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。 例如 </span><img src="https://www.nowcoder.com/equation?tex=%5Cbegin%7Bbmatrix%7D%20%0Aa%20%26%20b%20%26%20c%20%26e%20%5C%5C%20%0As%20%26%20f%20%26%20c%20%26%20s%20%5C%5C%0Aa%20%26%20d%20%26%20e%26%20e%5C%5C%20%0A%5Cend%7Bbmatrix%7D%5Cquad"><span> 矩阵中包含一条字符串&quot;bcced&quot;的路径，但是矩阵中不包含&quot;abcb&quot;路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。</span>  </div> <div>  <span>数据范围：<img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20n%2Cm%20%5Cle%2020%5C">,<img src="https://www.nowcoder.com/equation?tex=1%5Cle%20len%20%5Cle%2025%5C"><br> </span> </div> <div>  <span>进阶：时间复杂度<img src="https://www.nowcoder.com/equation?tex=O(n%5E2)%5C">，空间复杂度<img src="https://www.nowcoder.com/equation?tex=O(n%5E2%0A)%5C"><br> </span>  </div>',
      difficulty: 3,
      samples: [
        {
          input: '[[a,b,c,e],[s,f,c,s],[a,d,e,e]],"abcced"',
          note: "",
          output: "true\n"
        },
        {
          input: '[[a,b,c,e],[s,f,c,s],[a,d,e,e]],"abcb"',
          note: "",
          output: "false\n"
        }
      ],
      title: "矩阵中的路径",
      categories: ["dfs"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  地上有一个 rows 行和 cols 列的方格。坐标从 [0,0] 到 [<span>rows</span>-1,<span>cols</span>-1] 。一个机器人从坐标 [0,0] 的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于 threshold 的格子。 例如，当 <span>threshold </span>为 18 时，机器人能够进入方格   [35,37] ，因为 3+5+3+7 = 18。但是，它不能进入方格 [35,38] ，因为 3+5+3+8 = 19 。请问该机器人能够达到多少个格子？ </div> <div>  <span></span><br> </div> <div>  数据范围： <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20threshold%20%5Cle%2015%20%5C"> ，<img src="https://www.nowcoder.com/equation?tex=1%20%5Cle%20rows%2Ccols%20%5Cle%20100%20%20%5C">  </div> <div>  <br> </div> <div>  进阶：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(nm)%20%5C"> ，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(nm)%20%5C"><br> </div>',
      difficulty: 4,
      samples: [
        {
          input: "1,2,3",
          note: "",
          output: "3"
        },
        {
          input: "0,1,3",
          note: "",
          output: "1"
        },
        {
          input: "10,1,100",
          note: "[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],[0,15],[0,16],[0,17],[0,18],[0,19],[0,20],[0,21],[0,22],[0,23],[0,24],[0,25],[0,26],[0,27],[0,28] 这29种，后面的[0,29],[0,30]以及[0,31]等等是无法到达的      ",
          output: "29"
        },
        {
          input: "5,10,10",
          note: "",
          output: "21"
        }
      ],
      title: "机器人的运动范围",
      categories: ["递归"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。请找出数组中任意一个重复的数字。 例如，如果输入长度为7的数组[2,3,1,0,2,5,3]，那么对应的输出是2或者3。存在不合法的输入的话输出-1 </div> <div>  <br> </div> <div>  数据范围：<img src="https://www.nowcoder.com/equation?tex=0%5Cle%20n%20%5Cle%2010000%20%5C">  </div> <div>  进阶：时间复杂度<img src="https://www.nowcoder.com/equation?tex=O(n)%5C">，空间复杂度<img src="https://www.nowcoder.com/equation?tex=O(n)%5C"><br> </div>',
      difficulty: 2,
      samples: [
        {
          input: "[2,3,1,0,2,5,3]",
          note: "2或3都是对的   ",
          output: "2"
        }
      ],
      title: "数组中重复的数字",
      categories: ["数组"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。  即输出P mod <span>1000000007</span>  </div> <div>  <br> <span>数据范围：  对于 </span><img src="https://www.nowcoder.com/equation?tex=50%5C%25"> <span>的数据, </span><img src="https://www.nowcoder.com/equation?tex=size%5Cleq%2010%5E4"><br> <span> 对于 </span><img src="https://www.nowcoder.com/equation?tex=100%5C%25"> <span>的数据, </span><img src="https://www.nowcoder.com/equation?tex=size%5Cleq%2010%5E5">  </div> <div>  数组中所有数字的值满足 <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20val%20%5Cle%201000000"><br> <br> </div> <div>  要求：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(nlogn)">  </div>',
      difficulty: 3,
      samples: [
        {
          input: "[1,2,3,4,5,6,7,0]",
          note: "",
          output: "7"
        },
        {
          input: "[1,2,3]",
          note: "",
          output: "0\n"
        }
      ],
      title: "数组中的逆序对",
      categories: ["数组"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  给定一个长度为 n 的可能有重复值的数组，找出其中不去重的最小的 k 个数。例如数组元素是4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4(任意顺序皆可)。 </div> <div>  数据范围：<img src="https://www.nowcoder.com/equation?tex=0%5Cle%20k%2Cn%20%5Cle%2010000">，数组中每个数的大小<img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20val%20%5Cle%201000%20"><span></span> </div> <div>  要求：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)"> ，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(nlogn)">  </div> <div>  <span></span><br> </div>',
      difficulty: 3,
      samples: [
        {
          input: "[4,5,1,6,2,7,3,8],4 ",
          note: "返回最小的4个数即可，返回[1,3,2,4]也可以        ",
          output: "[1,2,3,4]"
        },
        {
          input: "[1],0",
          note: "",
          output: "[]"
        },
        {
          input: "[0,1,2,1,2],3",
          note: "",
          output: "[0,1,1]"
        }
      ],
      title: "最小的K个数",
      categories: ["堆", "排序", "分治"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。我们使用Insert()方法读取数据流，使用GetMedian()方法获取当前读取数据的中位数。 </div> <div>  <br> </div> <div>  数据范围：数据流中数个数满足 <img src="https://www.nowcoder.com/equation?tex=1%20%5Cle%20n%20%5Cle%201000%20%5C"> ，大小满足 <img src="https://www.nowcoder.com/equation?tex=1%20%5Cle%20val%20%5Cle%201000%20%5C"><br> <br> 进阶： 空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)%20%5C"> ， 时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(nlogn)%20%5C"><br> </div>',
      difficulty: 3,
      samples: [
        {
          input: "[5,2,3,4,1,6,7,0,8]",
          note: "数据流里面不断吐出的是5,2,3...,则得到的平均数分别为5,(5+2)/2,3...   ",
          output: '"5.00 3.50 3.00 3.50 3.00 3.50 4.00 3.50 4.00 "'
        },
        {
          input: "[1,1,1]\n",
          note: "",
          output: '"1.00 1.00 1.00 "\n'
        }
      ],
      title: "数据流中的中位数",
      categories: ["排序", "堆"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。 </div> <div>  <br> </div> <div>  数据范围：两个数都满足 <img src="https://www.nowcoder.com/equation?tex=-10%20%5Cle%20n%20%5Cle%201000"><br> 进阶：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)"><br> </div>',
      difficulty: 2,
      samples: [
        {
          input: "1,2",
          note: "",
          output: "3"
        },
        {
          input: "0,0",
          note: "",
          output: "0"
        }
      ],
      title: "不用加减乘除做加法",
      categories: ["基础数学"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  输入一个整数 n ，输出该数32位二进制表示中1的个数。其中负数用补码表示。 </div> <div>  <br> </div> <div>  数据范围：<img src="https://www.nowcoder.com/equation?tex=-%202%5E%7B31%7D%20%3C%3D%20n%20%3C%3D%202%5E%7B31%7D-1">  </div> <div>  即范围为:<img src="https://www.nowcoder.com/equation?tex=-2147483648%3C%3D%20n%20%3C%3D%202147483647"><span style="color: rgb(77,77,77);"></span>  </div> <div>  <div>  </div> </div>',
      difficulty: 2,
      samples: [
        {
          input: "10",
          note: "十进制中10的32位二进制表示为0000 0000 0000 0000 0000 0000 0000 1010，其中有两个1。       ",
          output: "2"
        },
        {
          input: "-1",
          note: "负数使用补码表示 ，-1的32位二进制表示为1111 1111 1111 1111 1111 1111 1111 1111，其中32个1    ",
          output: "32\n"
        }
      ],
      title: "二进制中1的个数",
      categories: ["基础数学"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  实现函数 double Power(double base, int exponent)，求base的exponent次方。 </div> <div>  <br> </div> <div>  注意： </div> <div>  1.保证base和exponent不同时为0。 </div> <div>  2.不得使用库函数，同时不需要考虑大数问题 </div> <div>  <span>3.有特殊判题，不用考虑小数点后面0的位数。</span>  </div> <div>  <br> </div> <div>  数据范围： <img src="https://www.nowcoder.com/equation?tex=%7Cbase%7C%20%5Cle%20100%20%5C"> ， <img src="https://www.nowcoder.com/equation?tex=%7Cexponent%7C%20%5Cle%20100%20%20%5C"> ,保证最终结果一定满足 <img src="https://www.nowcoder.com/equation?tex=%7Cval%7C%20%5Cle%2010%5E4%20%5C"><br> 进阶：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)%5C"> ，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)%5C"><br> </div> <div>  <br> </div>',
      difficulty: 3,
      samples: [
        {
          input: "2.00000,3",
          note: "",
          output: "8.00000"
        },
        {
          input: "2.10000,3",
          note: "",
          output: "9.26100"
        },
        {
          input: "2.00000,-2",
          note: "2的-2次方等于1/4=0.25    ",
          output: "0.25000"
        }
      ],
      title: "数值的整数次方",
      categories: ["基础数学"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  一个整型数组里除了两个数字只出现一次，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。 </div> <div>  <br> </div> <div>  数据范围：数组长度 <img src="https://www.nowcoder.com/equation?tex=2%5Cle%20n%20%5Cle%201000">，数组中每个数的大小 <img src="https://www.nowcoder.com/equation?tex=0%20%3C%20val%20%5Cle%201000000"><br> 要求：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)"><br> </div> <div>  <br> </div> <div>  提示：输出时按非降序排列。 </div>',
      difficulty: 3,
      samples: [
        {
          input: "[1,4,1,6]",
          note: "返回的结果中较小的数排在前面     ",
          output: "[4,6]"
        },
        {
          input: "[1,2,3,3,2,9]",
          note: "",
          output: "[1,9]"
        }
      ],
      title: "数组中只出现一次的两个数字",
      categories: ["位运算", "哈希"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。 </div> <div>  <br> </div> <div>  数据范围： <img src="https://www.nowcoder.com/equation?tex=0%20%3C%20n%20%5Cle%20200%20"><br> 进阶： 空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)"> ，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)"><br> </div>',
      difficulty: 3,
      samples: [
        {
          input: "5",
          note: "",
          output: "15"
        },
        {
          input: "1",
          note: "",
          output: "1"
        }
      ],
      title: "求1+2+3+...+n",
      categories: ["基础数学"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵： <br> </div> <div> <pre class="prettyprint ">[[1,2,3,4],\n[5,6,7,8],\n[9,10,11,12],\n[13,14,15,16]]</pre> 则依次打印出数字<br> </div> <div> <pre class="prettyprint ">[1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]\n</pre> 数据范围: </div> <div>  <span style="color: rgb(33,40,53);">0 &lt;= matrix.length &lt;= 100</span>  </div> <div>  <span style="color: rgb(33,40,53);">0 &lt;= matrix[i].length &lt;= 100</span>  </div> <br>',
      difficulty: 2,
      samples: [
        {
          input: "[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]",
          note: "",
          output: "[1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]"
        },
        {
          input: "[[1,2,3,1],[4,5,6,1],[4,5,6,1]]\n",
          note: "",
          output: "[1,2,3,1,1,1,6,5,4,4,5,6]\n"
        }
      ],
      title: "顺时针打印矩阵",
      categories: ["数组"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  现在有2副扑克牌，从扑克牌中随机五张扑克牌，我们需要来判断一下是不是顺子。<br> 有如下规则：<br> 1. A为1，J为11，Q为12，K为13，A不能视为14<br> 2. 大、小王为 0，0可以看作任意牌<br> 3. 如果给出的五张牌能组成顺子（即这五张牌是连续的）就输出true，否则就输出false。<br> 4.数据保证每组5个数字，每组最多含有4个零，数组的数取值为 [0, 13]<br> <br> </div> <div>  要求：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(nlogn)">，本题也有时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)"> 的解法 </div> <div> </div>',
      difficulty: 2,
      samples: [
        {
          input: "[6,0,2,0,4]",
          note: "中间的两个0一个看作3，一个看作5 。即：[6,3,2,5,4]\n这样这五张牌在[2,6]区间连续，输出true ",
          output: "true"
        },
        {
          input: "[0,3,2,6,4]",
          note: "",
          output: "true"
        },
        {
          input: "[1,0,0,1,0]",
          note: "",
          output: "false"
        },
        {
          input: "[13,12,11,0,1]",
          note: "",
          output: "false\n"
        }
      ],
      title: "扑克牌顺子",
      categories: ["模拟"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        "<div>  <span style=\"color: rgb(33,40,53);\">写一个函数 StrToInt，实现把字符串转换成整数这个功能。不能使用 atoi 或者其他类似的库函数。传入的字符串可能有以下部分组成:</span>  </div> <div>  <div>   <span style=\"color: rgb(38,38,38);\">1.若干空格</span>   </div>  <div>   <span style=\"color: rgb(38,38,38);\">2.</span><span style=\"color: rgb(38,38,38);\">（可选）一个符号字符（'+' 或 '-'）</span>   </div>  <div>   3. 数字，字母，符号，空格组成的字符串表达式  </div>  <div>   <span style=\"color: rgb(38,38,38);\">4. 若干空格</span>   </div> <br> </div> <div>  <strong>转换算法如下:</strong><br> <strong>1.去掉无用的前导空格</strong><br> <strong>2.第一个非空字符为+或者-号时，作为该整数的正负号，如果没有符号，默认为正数</strong><br> <strong>3.判断整数的有效部分：</strong><br> <strong>3.1 确定符号位之后，与之后面尽可能多的连续数字组合起来成为有效整数数字，如果没有有效的整数部分，那么直接返回0</strong><br> <strong>3.2 将字符串前面的整数部分取出，后面可能会存在存在多余的字符(字母，符号，空格等)，这些字符可以被忽略，它们对于函数不应该造成影响</strong><br> <strong>3.3  整数超过 32 位有符号整数范围 [−2</strong><sup><strong>31</strong></sup><strong>,  2</strong><sup><strong>31</strong></sup><strong> − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −2</strong><sup><strong>31</strong></sup><strong>的整数应该被调整为 −2</strong><sup><strong>31</strong></sup><strong> ，大于 2</strong><sup><strong>31</strong></sup><strong> − 1 的整数应该被调整为 2</strong><sup><strong>31</strong></sup><strong> − 1</strong><br> <strong>4.去掉无用的后导空格</strong><br> <br> </div> <div>  <br> </div> <div>  数据范围: </div> <div>  1.0 &lt;=字符串长度&lt;= 100 </div> <div>  2.字符串由英文字母（大写和小写）、数字（0-9）、' '、'+'、'-' 和 '.' 组成 </div> <div>  <br> </div> <div>  <br> </div>",
      difficulty: 3,
      samples: [
        {
          input: '"82"',
          note: "",
          output: "82\n"
        },
        {
          input: '"   -12  "',
          note: "去掉前后的空格，为-12  ",
          output: "-12\n"
        },
        {
          input: '"4396 clearlove"',
          note: "6后面的字符不属于有效的整数部分，去除，但是返回前面提取的有效部分  ",
          output: "4396\n"
        },
        {
          input: '"clearlove 4396"',
          note: "",
          output: "0\n"
        },
        {
          input: '"-987654321111"',
          note: "",
          output: "-2147483648\n"
        }
      ],
      title: "把字符串转换成整数(atoi)",
      categories: ["字符串"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  请实现一个函数用来判断字符串str是否表示数值（包括科学计数法的数字，小数和整数）。 </div> <div>  <br> </div> <div>  <strong>科学计数法的数字</strong>(按顺序）可以分成以下几个部分: </div> <div>  1.若干空格 </div> <div>  2.一个整数或者小数 </div> <div>  3.<span style="color: rgb(38,38,38);">（可选）一个 \'e\' 或 \'E\' ，后面跟着一个</span><span style="color: rgb(38,38,38);">整数(可正可负)</span>  </div> <div>  <span style="color: rgb(38,38,38);">4.若干空格</span>  </div> <div>  <span style="color: rgb(38,38,38);"><br> </span>  </div> <div>  <span style="color: rgb(38,38,38);"><span style="font-weight: bolder;color: rgb(38,38,38);">小数</span><span style="color: rgb(38,38,38);">（按顺序）可以分成以下几个部分：</span></span>  </div> <div>  <span style="color: rgb(38,38,38);"><span style="color: rgb(38,38,38);"><span>1.若干空格</span></span></span>  </div> <div>  <span style="color: rgb(38,38,38);">2.</span><span style="color: rgb(38,38,38);">（可选）一个符号字符（\'+\' 或 \'-\'）</span>  </div> <div>  <span style="color: rgb(38,38,38);">3. 可能是以下描述格式之一:</span>  </div> <div>  <span style="color: rgb(38,38,38);">3.1 </span><span style="color: rgb(38,38,38);">至少一位数字，后面跟着一个点 \'.\'</span>  </div> <div>  <span style="color: rgb(38,38,38);">3.2 </span><span style="color: rgb(38,38,38);">至少一位数字，后面跟着一个点 \'.\' ，后面再跟着至少一位数字</span>  </div> <div>  <span style="color: rgb(38,38,38);">3.3 </span><span style="color: rgb(38,38,38);">一个点 \'.\' ，后面跟着至少一位数字</span>  </div> <div>  <span style="color: rgb(38,38,38);"><span style="color: rgb(38,38,38);">4.若干空格</span><br> </span>  </div> <div>  <span style="color: rgb(38,38,38);"><br> </span>  </div> <div>  <span style="color: rgb(38,38,38);"><span style="font-weight: bolder;color: rgb(38,38,38);">整数</span><span style="color: rgb(38,38,38);">（按顺序）可以分成以下几个部分：</span></span>  </div> <div>  <span style="color: rgb(38,38,38);"><span style="color: rgb(38,38,38);">1.若干空格</span><br> 2.<span style="color: rgb(38,38,38);">（可选）一个符号字符（</span>\'+\'<span style="color: rgb(38,38,38);"> 或 </span>\'-\')</span>  </div> <div>  <span style="color: rgb(38,38,38);">3. </span><span style="color: rgb(38,38,38);">至少一位数字</span>  </div> <div>  <span style="color: rgb(38,38,38);"><span style="color: rgb(38,38,38);">4.若干空格</span><br> <br> <br> </span>  </div> <div>  <span>例如，字符串[&quot;+100&quot;,&quot;5e2&quot;,&quot;-123&quot;,&quot;3.1416&quot;,&quot;-1E-16&quot;]都表示数值。 </span>  </div> <div>  <span>但是[&quot;12e&quot;,&quot;1a3.14&quot;,&quot;1.2.3&quot;,&quot;+-5&quot;,&quot;12e+4.3&quot;]都不是数值。</span>  </div> <div>  <span style="color: rgb(38,38,38);"><br> </span>  </div> <div>  提示: </div> <div>  <span style="color: rgb(38,38,38);">1.1 &lt;= <span>str</span>.length &lt;= 25</span>  </div> <div>  <span style="color: rgb(38,38,38);">2.str 仅含英文字母（大写和小写），数字（0-9），加号 \'+\' ，减号 \'-\' ，空格 \' \' 或者点 \'.\' 。</span>  </div> <div>  <span style="color: rgb(38,38,38);">3.如果怀疑用例是不是能表示为数值的，可以使用python的print(float(str))去查看</span>  </div> <div>  <span style="color: rgb(38,38,38);">进阶：时间复杂度<img src="https://www.nowcoder.com/equation?tex=O(n)%5C">，空间复杂度<img src="https://www.nowcoder.com/equation?tex=O(n)%5C"><br> </span>  </div> <div>  <span><br> </span>  </div>',
      difficulty: 4,
      samples: [
        {
          input: '"123.45e+6"',
          note: "",
          output: "true\n"
        },
        {
          input: '"1.2.3"',
          note: "",
          output: "false"
        },
        {
          input: '"."',
          note: "",
          output: "false"
        },
        {
          input: '"    .2  "',
          note: "",
          output: "true\n"
        }
      ],
      title: "表示数值的字符串",
      categories: ["字符串"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  给定一个数组 A[0,1,...,n-1] ,请构建一个数组 B[0,1,...,n-1] ,其中 B 的元素 B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]（除 A[i] 以外的全部元素的的乘积）。程序中不能使用除法。（注意：规定 B[0] = A[1] * A[2] * ... * A[n-1]，B[n-1] = A[0] * A[1] * ... * A[n-2]） </div> <div>  对于 A 长度为 1 的情况，B 无意义，故而无法构建，用例中不包括这种情况。 </div> <div>  <br> </div> <div>  数据范围：<img src="https://www.nowcoder.com/equation?tex=1%20%5Cle%20n%20%5Cle%2010%20%5C"> ，数组中元素满足 <img src="https://www.nowcoder.com/equation?tex=%7Cval%7C%20%5Cle%2010%20%5C"><br> </div>',
      difficulty: 2,
      samples: [
        {
          input: "[1,2,3,4,5]",
          note: "",
          output: "[120,60,40,30,24]"
        },
        {
          input: "[100,50]",
          note: "",
          output: "[50,100]\n"
        }
      ],
      title: "构建乘积数组",
      categories: ["数组"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  在一个长为 <span></span>字符串中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回 -1（需要区分大小写）.（从0开始计数） </div> <div>  <br> </div> <div>  <br> </div> <div>  数据范围：<img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20n%20%5Cle%2010000">，且字符串只有字母组成。 </div> <div>  要求：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">  </div>',
      difficulty: 2,
      samples: [
        {
          input: '"google"',
          note: "",
          output: "4"
        },
        {
          input: '"aa"',
          note: "",
          output: "-1"
        }
      ],
      title: "第一个只出现一次的字符",
      categories: ["字符串"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  请实现一个函数，将一个字符串s中的每个空格替换成“%20”。 </div> <div>  例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。 </div> <div>  <br> </div> <div>  数据范围:<img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20len(s)%20%5Cle%201000%20%5C">。保证字符串中的字符为大写英文字母、小写英文字母和空格中的一种。 </div> <div>  进阶：时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)%5C"> ,空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)%20%5C"><br> </div>',
      difficulty: 2,
      samples: [
        {
          input: '"We Are Happy"',
          note: "",
          output: '"We%20Are%20Happy"'
        },
        {
          input: '" "',
          note: "",
          output: '"%20"\n'
        }
      ],
      title: "替换空格",
      categories: ["字符串"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  输入一个长度为 n 整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前面部分，所有的偶数位于数组的后面部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。 </div> <div>  <br> </div> <div>  数据范围：<img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20n%20%5Cle%205000">，数组中每个数的值 <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20val%20%5Cle%2010000%20">  </div> <div>  要求：<span>时间复杂度 </span><img src="https://www.nowcoder.com/equation?tex=O(n)">，空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">  </div> <div>  进阶：<span>时间复杂度 </span><img src="https://www.nowcoder.com/equation?tex=O(n%5E2)"><span>，空间复杂度<span> </span><img src="https://www.nowcoder.com/equation?tex=O(1)"></span><span><span></span></span>  </div>',
      difficulty: 3,
      samples: [
        {
          input: "[1,2,3,4]",
          note: "",
          output: "[1,3,2,4]"
        },
        {
          input: "[2,4,6,5,7]",
          note: "",
          output: "[5,7,2,4,6]"
        },
        {
          input: "[1,3,5,6,7]",
          note: "",
          output: "[1,3,5,7,6]"
        }
      ],
      title: "调整数组顺序使奇数位于偶数前面(一)",
      categories: ["数组"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  给一个长度为 n 的数组，数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。 </div> <div>  例如输入一个长度为9的数组[1,2,3,2,2,2,5,4,2]。由于数字2在数组中出现了5次，超过数组长度的一半，因<span></span>此输出2。 </div> <div>  <span></span><br> </div> <div>  数据范围：<img src="https://www.nowcoder.com/equation?tex=n%20%5Cle%2050000">，数组中元素的值 <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20val%20%5Cle%2010000">  </div> <div>  要求：空间复杂度：<img src="https://www.nowcoder.com/equation?tex=O(1)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">  </div>',
      difficulty: 2,
      samples: [
        {
          input: "[1,2,3,2,2,2,5,4,2]",
          note: "",
          output: "2"
        },
        {
          input: "[3,3,3,3,2,2,2]",
          note: "",
          output: "3"
        },
        {
          input: "[1]",
          note: "",
          output: "1"
        }
      ],
      title: "数组中出现次数超过一半的数字",
      categories: ["哈希", "数组"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '输入一个整数 n ，求 1～n 这 n 个整数的十进制表示中 1 出现的次数<br> 例如， 1~13 中包含 1 的数字有 1 、 10 、 11 、 12 、 13 因此共出现 6 次<br> <div>  <br> </div> <div>  注意：11 这种情况算两次 </div> <div>  <br> </div> <div>  数据范围： <img src="https://www.nowcoder.com/equation?tex=1%20%5Cle%20n%20%5Cle%2030000%20%5C"><br> </div> <div>  进阶：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)%20%5C"> ，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(lognn)%20%5C"><br> </div>',
      difficulty: 3,
      samples: [
        {
          input: "13",
          note: "",
          output: "6"
        },
        {
          input: "0",
          note: "",
          output: "0"
        }
      ],
      title: "整数中1出现的次数（从1到n整数中1出现的次数）",
      categories: ["基础数学"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        "<div>  输入一个非负整数数组numbers，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。 </div> <div>  例如输入数组[3，32，321]，则打印出这三个数字能排成的最小数字为321323。 </div> <div>  1.输出结果可能非常大，所以你需要返回一个字符串而不是整数<br> 2.拼接起来的数字可能会有前导 0，最后结果不需要去掉前导 0<br> </div> <div>  <br> </div> <div>  数据范围: </div> <div>  0&lt;=len(<span>numbers)&lt;=100</span>  </div>",
      difficulty: 3,
      samples: [
        {
          input: "[11,3]",
          note: "",
          output: '"113"'
        },
        {
          input: "[]",
          note: "",
          output: '""'
        },
        {
          input: "[3,32,321]",
          note: "",
          output: '"321323"'
        }
      ],
      title: "把数组排成最小的数",
      categories: ["数组", "贪心", "排序"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  把只包含质因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含质因子7。 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第 n个丑数。 </div> <div>  <br> </div> <div>  数据范围：<img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20n%20%5Cle%202000">  </div> <div>  要求：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)"> ， 时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">  </div>',
      difficulty: 3,
      samples: [
        {
          input: "7",
          note: "",
          output: "8\n"
        }
      ],
      title: "丑数",
      categories: ["基础数学", "二分"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列? </div> <div>  <br> </div> <div>  数据范围：<img src="https://www.nowcoder.com/equation?tex=0%20%3C%20n%20%5Cle%20100%20"><br> 进阶：时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)"><br> </div>',
      difficulty: 3,
      samples: [
        {
          input: "9",
          note: "",
          output: "[[2,3,4],[4,5]]"
        },
        {
          input: "0",
          note: "",
          output: "[]\n"
        }
      ],
      title: "和为S的连续正数序列",
      categories: ["穷举"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        "<div>  输入一个递增排序的数组array和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，返回任意一组即可，如果无法找出这样的数字，返回一个空数组即可。 </div> <div>  <br> </div> <div>  数据范围: </div> <div>  0&lt;=len(<span>array)</span>&lt;=10<sup>5</sup>  </div> <div>  1&lt;=array[i]&lt;=10<sup>6</sup>  </div>",
      difficulty: 3,
      samples: [
        {
          input: "[1,2,4,7,11,15],15",
          note: "返回[4,11]或者[11,4]都是可以的      ",
          output: "[4,11]"
        },
        {
          input: "[1,5,11],10",
          note: "不存在，返回空数组    ",
          output: "[]"
        },
        {
          input: "[1,2,3,4],5",
          note: "返回[1,4],[4,1],[2,3],[3,2]都是可以的  ",
          output: "[1,4]\n"
        }
      ],
      title: "和为S的两个数字",
      categories: ["数学", "数组", "双指针"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  汇编语言中有一种移位指令叫做循环左移（ROL），现在有个简单的任务，就是用字符串模拟这个指令的运算结果。对于一个给定的字符序列  S ，请你把其循环左移 K 位后的序列输出。例如，字符序列 S = ”abcXYZdef” , 要求输出循环左移 3 位后的结果，即 “XYZdefabc” 。是不是很简单？OK，搞定它！ </div> <div>  <br> </div> <div>  数据范围：输入的字符串长度满足 <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20len%20%5Cle%20100%20%5C"> ， <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20n%20%5Cle%20100%20%5C"><br> </div> <div>  进阶：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)%5C">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)%5C"><br> </div>',
      difficulty: 3,
      samples: [
        {
          input: '"abcXYZdef",3',
          note: "",
          output: '"XYZdefabc"'
        },
        {
          input: '"aab",10',
          note: "",
          output: '"aba"\n'
        }
      ],
      title: "左旋转字符串",
      categories: ["字符串"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>      每年六一儿童节，牛客都会准备一些小礼物和小游戏去看望孤儿院的孩子们。其中，有个游戏是这样的：首先，让 n 个小朋友们围成一个大圈，小朋友们的编号是0~n-1。然后，随机指定一个数 m ，让编号为0的小朋友开始报数。每次喊到 m-1 的那个小朋友要出列唱首歌，然后可以在礼品箱中任意的挑选礼物，并且不再回到圈中，从他的下一个小朋友开始，继续0...<span> m-1</span>报数....这样下去....直到剩下最后一个小朋友，可以不用表演，并且拿到牛客礼品，请你试着想下，哪个小朋友会得到这份礼品呢？ </div> <div>  <img alt="" src="https://uploadfiles.nowcoder.com/images/20211008/557336_1633683919444/969B0F1641FC5D27A2F517347991EB78"><br> </div> <div>  数据范围：<img src="https://www.nowcoder.com/equation?tex=1%20%5Cle%20n%20%5Cle%205000">，<img src="https://www.nowcoder.com/equation?tex=1%20%5Cle%20m%20%5Cle%2010000">  </div> <div>  要求：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)">，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">  </div>',
      difficulty: 3,
      samples: [
        {
          input: "5,3",
          note: "",
          output: "3"
        },
        {
          input: "2,3",
          note: "有2个小朋友编号为0，1，第一次报数报到3的是0号小朋友，0号小朋友出圈，1号小朋友得到礼物  ",
          output: "1"
        },
        {
          input: "10,17",
          note: "",
          output: "2"
        }
      ],
      title: "孩子们的游戏(圆圈中最后剩下的数)",
      categories: ["基础数学"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  请实现一个函数用来找出字符流中第一个只出现一次的字符。例如，当从字符流中只读出前两个字符 &quot;go&quot; 时，第一个只出现一次的字符是 &quot;g&quot; 。当从该字符流中读出前六个字符 “google&quot; 时，第一个只出现一次的字符是&quot;l&quot;。 </div> <div>  <br> </div> <div>  数据范围：字符串长度满足 <img src="https://www.nowcoder.com/equation?tex=1%20%5Cle%20n%20%5Cle%201000%20%5C"> ，字符串中出现的字符一定在 ASCII 码内。<br> 进阶：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)%5C"> ，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)%20%5C"><br> </div> <div>  <br> </div> <div>  后台会用以下方式调用 <span>Insert 和 <span>FirstAppearingOnce 函数</span></span> </div> <blockquote>  <div>   string caseout = &quot;&quot;;  </div>  <div>   1.读入测试用例字符串casein  </div>  <div>   2.如果对应语言有Init()函数的话，执行Init() 函数  </div>  <div>   3.循环遍历字符串里的每一个字符ch {  </div>  <div>   Insert(ch);  </div>  <div>   caseout += FirstAppearingOnce()  </div>  <div>   }  </div>  <div>   2. 输出caseout，进行比较。  </div> </blockquote>',
      difficulty: 3,
      samples: [
        {
          input: '"google"',
          note: "",
          output: '"ggg#ll"'
        },
        {
          input: '"abcdee"\n',
          note: "",
          output: '"aaaaaa"\n'
        }
      ],
      title: "字符流中第一个不重复的字符",
      categories: ["字符串"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  给你一根长度为 n 的绳子，请把绳子剪成整数长的 m 段（ m 、 n 都是整数， n &gt; 1 并且 m &gt; 1 ， m &lt;= n ），每段绳子的长度记为 k[1],...,k[m] 。请问 k[1]*k[2]*...*k[m] 可能的最大乘积是多少？例如，当绳子的长度是 8 时，我们把它剪成长度分别为 2、3、3 的三段，此时得到的最大乘积是 18 。 </div> <div>  <br> </div> <div>  数据范围： <img src="https://www.nowcoder.com/equation?tex=2%20%5Cle%20n%20%5Cle%2060"><br> 进阶：空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)"> ，时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)"><span></span><br> </div>',
      difficulty: 3,
      samples: [
        {
          input: "8",
          note: "8 = 2 +3 +3 , 2*3*3=18 ",
          output: "18"
        },
        {
          input: "2",
          note: "m>1，所以切成两段长度是1的绳子    ",
          output: "1"
        }
      ],
      title: "剪绳子",
      categories: ["基础数学"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  输入一个长度为 n 整数数组，数组里面可能含有相同的元素，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前面部分，所有的偶数位于数组的后面部分，对奇数和奇数，偶数和偶数之间的相对位置不做要求，但是时间复杂度和空间复杂度必须如下要求。 </div> <div>  <br> </div> <div>  数据范围：<img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20n%20%5Cle%2050000">，数组中每个数的值 <img src="https://www.nowcoder.com/equation?tex=0%20%5Cle%20val%20%5Cle%2010000%20">  </div> <div>  要求：时间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(n)">，空间复杂度 <img src="https://www.nowcoder.com/equation?tex=O(1)">  </div>',
      difficulty: 2,
      samples: [
        {
          input: "[1,2,3,4]",
          note: "[3,1,2,4]或者[3,1,4,2]也是正确答案 ",
          output: "[1,3,2,4]\n"
        },
        {
          input: "[1,3,5,6,7]",
          note: "[3,1,5,7,6]等也是正确答案 ",
          output: "[1,3,5,7,6]\n"
        },
        {
          input: "[1,4,4,3]",
          note: "",
          output: "[1,3,4,4]\n"
        }
      ],
      title: "调整数组顺序使奇数位于偶数前面(二)",
      categories: ["数组", "排序"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  给你一根长度为 n 的绳子，请把绳子剪成整数长的 m 段（ m 、 n 都是整数， n &gt; 1 并且 m &gt; 1 ， m &lt;=  n ），每段绳子的长度记为 k[1],...,k[m] 。请问 k[1]*k[2]*...*k[m]  可能的最大乘积是多少？例如，当绳子的长度是 8 时，我们把它剪成长度分别为 2、3、3 的三段，此时得到的最大乘积是 18 。 </div> <div>  <br> </div> <div>  由于答案过大，请对 998244353 取模。 </div> <div>  <br> </div> <div>  数据范围：<img src="https://www.nowcoder.com/equation?tex=2%5Cleq%20n%20%5Cleq%2010%5E%7B14%7D">  </div> <div>  进阶：空间复杂度 <img alt="O(1)" src="https://www.nowcoder.com/equation?tex=O(1)"> ， 时间复杂度 <img alt="O(logn)" src="https://www.nowcoder.com/equation?tex=O(logn)"><br> </div> <div>  <br> </div>',
      difficulty: 4,
      samples: [
        {
          input: "4",
          note: "<div>拆分成 2 个长度为 2 的绳子，2 * 2 = 4</div><div>或者直接不剪，答案也是4。 <br /></div>   ",
          output: "4\n"
        },
        {
          input: "5",
          note: "剪成一个长度为 2 的绳子和一个长度为 3 的绳子，答案为2*3=6<br />   ",
          output: "6\n"
        },
        {
          input: "874520",
          note: "",
          output: "908070737\n"
        }
      ],
      title: "剪绳子（进阶版）",
      categories: ["基础数学", "快速幂"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  },
  {
    question: {
      content:
        '<div>  <span style="color: rgb(33,40,53);">输入数字<span> </span></span>n<span style="color: rgb(33,40,53);">，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。</span>  </div> <div>  <span>1. 用返回一个整数列表来代替打印</span><br> <span>2. n 为正整数，0 &lt; n &lt;= 5</span><br> </div>',
      difficulty: 2,
      samples: [
        {
          input: "1",
          note: "",
          output: "[1,2,3,4,5,6,7,8,9]\n"
        }
      ],
      title: "打印从1到最大的n位数",
      categories: ["数组"]
    },
    problem: {
      template: "",
      callee: "",
      cases: [],
      injects: [],
      testInjectId: 0,
      answerInjectId: 0
    }
  }
];
exports.datas = datas;
