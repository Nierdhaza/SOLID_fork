// Liskov Substitution Principle

// в кусок кода (в функцию или в метод приходит класс (например Parent) то этот же метод или функция должны без ошибок обрабатывать дочерний классы 
// (например class Child extends Parent) )

// class Person {
//
// }
//
// class Member extends Person {
//   access() {
//     console.log('У тебя есть доступ')
//   }
// }
//
// class Guest extends Person {
//   isGuest = true
// }
//
// class Frontend extends Member {
//   canCreateFrontend() {}
// }
//
// class Backend extends Member {
//   canCreateBackend() {}
// }
//
// class PersonFromDifferentCompany extends Guest {
//   access() {
//     throw new Error('У тебя нет доступа! Иди к себе!')
//   }
// }
//
// function openSecretDoor(member) {
//   member.access()
// }
//
// openSecretDoor(new Frontend())
// openSecretDoor(new Backend())
// openSecretDoor(new PersonFromDifferentCompany())  // There should be member!

// ===============

class Component {
  isComponent = true
}

class ComponentWithTemplate extends Component {
  render() {
    return `<div>Component</div>`
  }
}

class HigherOrderComponent extends Component {

}

class HeaderComponent extends ComponentWithTemplate {
  onInit() {}
}

class FooterComponent extends ComponentWithTemplate {
  afterInit() {}
}

class HOC extends HigherOrderComponent {
  render() {
    throw new Error('Render is impossible here')
  }

  wrapComponent(component) {
    component.wrapped = true
    return component
  }
}

function renderComponent(component) {
  console.log(component.render())
}


renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())





// class Sportsmen {
//   isHuman = true;
//   doWorkout(workoutType = 'running') {
//     console.log(`Sportsmen is ${workoutType}`)
//   }
// }

// class Swimmer extends Sportsmen {
//   startTraining() {
//     this.doWorkout('swimming')
//   }
// }

// class Boxer extends Sportsmen {
//   startTraining() {
//     this.doWorkout('boxing')
//   }
// }

// class Karate extends Sportsmen {
//   startTraining() {
//     this.doWorkout('engaging carate')
//   }
// }

// class Vova extends Boxer {
//   startTraining() {
//     this.doWorkout('Boxing in Getman');
//   }
// }


// function showInfo(sportsmen) {
//   sportsmen.startTraining();
// }

// console.log(showInfo(new Boxer));
// console.log(showInfo(new Swimmer));
// console.log(showInfo(new Karate));
// console.log(showInfo(new Vova));