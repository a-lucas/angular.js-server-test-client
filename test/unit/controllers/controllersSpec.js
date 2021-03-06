//
// test/unit/controllers/controllersSpec.js
//
describe("Unit: Testing Controllers", function () {

    beforeEach(angular.mock.module('myApp'));

    var $controller, $scope, $log;

    beforeEach(inject(function (_$rootScope_, _$controller_, _$log_) {
        $controller = _$controller_;
        $scope = _$rootScope_;
        $log = _$log_;
    }));

    describe('MainCtrl', function() {
        it('should have a MainCtrl controller', function () {
            var MainCtrl = $controller('MainCtrl', [$log]);
            expect(MainCtrl.title).to.eql('Angular Es6 revisited');
        });
    });

    describe('FormCtrl', function() {
        it('should have a FormCtrl controller', function () {
            var FormCtrl = $controller('FormCtrl', []);
            expect(FormCtrl.formModel.username).to.eql('');
        });

        it('Submite should set submitted to true', function () {
            var FormCtrl = $controller('FormCtrl', []);
            expect(FormCtrl.submitted).to.eql(false);
            FormCtrl.submitForm();
            expect(FormCtrl.submitted).to.eql(true);
        });
        
    });

    describe('Todo Ctrl Test', function() {
        it('should have a TodoCtrl controller', function () {
            var TodoCtrl = $controller('TodoCtrl');
            expect(TodoCtrl.title).to.eql('Todos title');
        });

        it('Todo.add a todo should work', function () {
            var TodoCtrl = $controller('TodoCtrl');
            var todos = TodoCtrl.todos;
            var newTodo = "New Todo";
            todos.push({text: newTodo, done: false});
            TodoCtrl.todoText = newTodo;
            TodoCtrl.addTodo();
            expect(TodoCtrl.todos).to.equal(todos);
        });
    });

    describe('ErrorCtrl', function() {
        it('Should throw an exception', function() {
            try {
                $controller('ErrorCtrl');
            } catch(e){
                expect(e).to.equal('Uncatchable Error() - should crash the app.');
            }
        });
    });


});
