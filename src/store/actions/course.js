export function toggleLesson(module, lesson){
    return {
        type: 'TOGGLE_LESSON', //type:ação realizada(única) 
        module,
        lesson
    };
}