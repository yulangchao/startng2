import {Component, View} from 'angular2/core';
import {Angular2AutoScroll} from "angular2-auto-scroll/lib/angular2-auto-scroll.directive";
import {ChatService} from './chat.service';

// We `import` `http` into our `ChatService` but we can only
// specify providers within our component
import {HTTP_PROVIDERS} from 'angular2/http';

// Import NgFor directive
import {NgFor} from 'angular2/common';

// Create metadata with the `@Component` decorator
@Component({
    // HTML tag for specifying this component
    selector: 'chat',
    // Let Angular 2 know about `Http` and `ChatService`
    providers: [...HTTP_PROVIDERS, ChatService],
    template: require('./chat.html'),
    directives: [Angular2AutoScroll]
})


export class Chat {

  // Initialize our `chatData.text` to an empty `string`
  chatData = {
    text: '',
    name: ''
  };

  private chats: Array<Chat> = [];

  constructor(public ChatService: ChatService) {
      console.log('Chat constructor go!');

      //this.chats = [];
      ChatService.getAll()
      // `Rxjs`; we subscribe to the response
          .subscribe((res) => {

              // Populate our `todo` array with the `response` data
              this.chats = res;
              // Reset `todo` input
              this.chatData.text = '';
          });

      setInterval(() => {
          ChatService.getAll()
          // `Rxjs`; we subscribe to the response
              .subscribe((res) => {

                  // Populate our `todo` array with the `response` data
                  this.chats = res;
                  // Reset `todo` input
              });
      }, 1000);
  }


  createChat() {
      console.log(this.chatData);
      this.ChatService.createChat(this.chatData)
        .subscribe((res) => {

            // Populate our `todo` array with the `response` data
            this.chats = res;
            // Reset `todo` input
            this.chatData.text = '';
        });
  }

  deleteChat(id) {

    this.ChatService.deleteChat(id)
      .subscribe((res) => {

          // Populate our `todo` array with the `response` data
          this.chats = res;
      });
  }

  refresh(){
      console.log("11111");
      this.ChatService.getAll()
          .subscribe((res) => {

              // Populate our `todo` array with the `response` data
              this.chats = res;
              // Reset `todo` input
              this.chatData.text = '';
      });
  }
}
