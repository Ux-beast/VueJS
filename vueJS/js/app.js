

new Vue({
    el:'#app',
    data:{
        title:'Hello Moses',
        link:'https://google.com',
        finishedLink:'<a href="https://google.com">Google</a>'
    },
    methods:{
        sayHello:function(){
            return this.title;
        }
    }

}); 

new Vue({
  el :".mose",
  data: {
      counter: 0
  },
  methods:{
      increase: function(){
          this.counter++;
      }
  }

});