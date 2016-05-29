(function (global) {

    var EMS = global.EMS || {};

    var data = {
        employees: []
    };

    var actions = {
        checkIn: function () {
            this.lastCheckIn = (new Date()).toString();
        },
        sayYo: function () {
            console.log("Yo, I'm " + this.name);
        },
        fireEveryone: function () {
            alert("Booo");
        }
    };

    EMS.runAction = function (employeeId, action) {
        var employee = this.getEmployeeById(employeeId);
        if (employee.actions.indexOf(action) === -1) {
            throw new Error("Action not supported for employee type");
        }
        return actions[action].call(employee);
    };

    EMS.getEmployeeById = function (id) {
        return data.employees[id - 1];
    };

    EMS.getEmployees = function () {
        return data;
    };

    EMS.addEmployee = function (employee) {
        employee.id = data.employees.length + 1;
        employee.actions = [];
        switch (employee.type) {
            case "CEO":
                employee.actions.push("fireEveryone");
            case "CEO":
            case "Manager":
                employee.actions.push("sayYo");
            default:
                employee.actions.push("checkIn");
        }
        data.employees.push(employee);
    };


    global.EMS = EMS;

}(window));
