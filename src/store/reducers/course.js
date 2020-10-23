const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
      {
          id: 1,
          title: 'Iniciando com React ',
          lessons: [
              { id: 1, title: ' 1 aula' },
              { id: 2, title: ' 2 aula' }
          ],
      },
      {
          id: 2,
          title: 'Aprendendo Redux',
          lessons: [
              { id: 3, title: ' 3 aula' },
              { id: 4, title: ' 4 aula' }
          ],
      }
  ]  
  }

//Função q retorna o state inicial(Reducer):
// 1) Armazena state e pd manipula-lo;
// 2) ACTIONS => ações que passamos pro redux q indicam a necessidade//não de manipular o state de alguma forma('type'),
// Ex: ações do usuário ou ações da própria aplicação.
// Parâmetros:
// 1) state => estado anterior;
// 2) Action
export default function course(state = INITIAL_STATE, action) {
    if (action.type === 'TOGGLE_LESSON') {
        return {...state, 
            activeLesson: action.lesson,
            activeModule: action.module
        }

    }
    return state;
}