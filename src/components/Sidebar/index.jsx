import React from 'react';

// Como pego o modules? connect!!(Higher-Order Component : padrão do react p/ compartilhar informação com outro componente)
// EX: export default connect()+(sidebar) = terceiro componente
// Obs: connect tbem nos fornece o dispatch(função que envia o action(Objeto com type, q pd ou ñ conter dados) p/ processamento) 
import { connect } from 'react-redux';
import {bindActionCreators } from 'redux';// Mapea em forma de propriedade

import * as CourseActions from '../../store/actions/course';

// transforma o Sidebar em um componente stateless
const Sidebar = ({ modules, toggleLesson }) => (
    <aside>
        {modules.map(module => (
            <div key={module.id}>
                <strong>{module.title}</strong>
                <ul>
                    {module.lessons.map(lesson => (
                        <li key={lesson.id}>
                            {lesson.title}
                            {/* <button onClick={() => dispatch(CourseActions.toggleLesson(module, lesson))}>Selecionar</button> */}
                            <button onClick={() => toggleLesson(module, lesson)}>Selecionar</button>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </aside>
)

const mapStateToProps = state => ({
    modules: state.course.modules
});

const mapDispatchToProps = dispatch => 
bindActionCreators(CourseActions, dispatch);

// const mapDispatchToProps = dispatch => ({
//     toggleLesson: (module, lesson) =>
//      dispatch(CourseActions.toggleLesson(module, lesson))
// });
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)

// export default connect(state => ({ modules: state.course.modules }))(Sidebar)

// export default connect() (sidebar)
// O connect() tem como parãmetro => 1a Função: recebe um estado e retorna quais propriedades eu quero daquele estado
//                                   2a Função: componente funcional q está sendo passado
// obs: https://pt-br.reactjs.org/docs/higher-order-components.html



// export default class Sidebar extends Component {

//     render() {
//         const { modules } = this.props;
//         return (
//             <aside>
//                 {modules.map(module => (
//                    <div key={module.id}>
//                        <strong>{module.title}</strong>
//                        <ul>
//                            {module.lessons.map(lesson =>(
//                                <li key={lesson.id}>{lesson.title}</li>
//                            ))}
//                        </ul>
//                    </div> 
//                 ))}
//             </aside>
//         );
//     }
// }