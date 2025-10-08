# FaqAccordion

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Animation Theory

1. trigger
A trigger groups all the animations for a specific element or component.

In this case, the trigger is named slideToggle, which will be applied to elements we want to animate.

2. state
States define how an element should look in different conditions.

Here, two states are defined:

void: Represents when the element is not present in the DOM. For example, when an FAQ item is hidden or collapsed.

state('void', style({ height: 0, opacity: 0 }))
The element has a height of 0 and is fully transparent (opacity: 0).

*: The wildcard state represents any other state besides void. In this case, it refers to the element being fully visible in the DOM.

state('*', style({ height: '*', opacity: 1 }))
The height is dynamically calculated based on the content (height: '*'), and the element is fully opaque (opacity: 1).

3. transition
Transitions define how the element moves between states, specifying animations for entering or leaving the DOM.

Two transitions are used:

:enter:

Shortcut for transitioning from void (not in the DOM) to * (visible in the DOM).

Here, the element grows from height: 0 to its natural height and fades in over 300ms.

transition(':enter', [animate('300ms ease-out')])
:leave:

Shortcut for transitioning from * (visible in the DOM) to void (removed from the DOM).

Here, the element shrinks from its current height to height: 0 and fades out over 300ms.

transition(':leave', [animate('300ms ease-in')])
4. style
Defines the visual properties of the element in each state. Examples:

style({ height: 0, opacity: 0 }): Collapsed state with no height and transparency.

style({ height: '*', opacity: 1 }): Fully visible state with a dynamically calculated height.

5. animate
Specifies the duration, easing function, and properties to animate during a transition.

animate('300ms ease-out'): Animates over 300ms with an easing-out effect, meaning the animation starts quickly and slows down at the end.

How It Works Together
When an FAQ item is expanded (:enter):

The element transitions from the void state (height: 0, opacity: 0) to the * state (height: '*', opacity: 1) over 300ms.

When an FAQ item is collapsed (:leave):

The element transitions from the * state (height: '*', opacity: 1) to the void state (height: 0, opacity: 0) over 300ms.
