/**
 * Created by antoine on 17/02/16.
 */
export default class ErrorCtrl {

    constructor($log) {

        this.error1 = 'Catchable Error()';
        this.error2 = 'Catchable Exception()';
        this.error3 = 'Uncatchable Error() - should crash the app.';

        $log.log('Will....' + this.error1);

        try {
            this.throwError(this.error1)
        } catch (e1) {
            $log.log('I catched an Error/Exception: ' + e1 );
            try {
                $log.log('Will....' + this.error2);
                this.throwException(this.error2);
            } catch (e2) {
                $log.log('I catched an Error/Exception: ' + e2 );
                $log.log('Will....' + this.error3);
                this.throwException(this.error3);
            }
        }
    }

    throwError = (text) => {
        throw new Error(text);
    };

    throwException = (text) => {
        throw text;
    };

}