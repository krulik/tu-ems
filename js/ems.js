(function (global) {

    var EMS = global.EMS || {};

    var data = {
        employees: []
    };

    EMS.getEmployees = function () {
        return data;
    };

    EMS.addEmployee = function (employee) {
        employee.id = data.employees.length + 1;
        data.employees.push(employee);
    };


    global.EMS = EMS;

}(window));
