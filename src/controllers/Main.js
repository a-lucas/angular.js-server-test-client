/**
 * Created by antoine on 9/02/16.
 */

class MainCtrl {
    constructor($log){
        $log.log('I am a log', 'with two parameters');
        $log.warn('I am a warn');
        $log.info('I am an info');
        //This kills phantom.js onError
        /*$log.error('I am error with an object', {
            name: 'value'
        });*/

    }

    title = 'Angular Es6 revisited';

    setTitle = (title) => {
        this.title = title;
    };
}
export default MainCtrl;