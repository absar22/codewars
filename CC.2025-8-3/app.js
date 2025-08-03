// Your task is to complete the Cat class which extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'

// The name attribute is accessible in the class with this.name.

class Cat extends Animal {
  speak(){
    return `${this.name} meows.`
  }
}