(function (global) {

    var EMS = global.EMS || {};


    EMS.employees = [
        {
            name: "Da Big Boss",
            skill: "Firing People",
            type: "CEO"
        }
    ];

    EMS.getEmployees = function () {
        return {
            employees: EMS.employees
        };
    };

    EMS.addEmployee = function (data) {
        EMS.employees.push(data);
    };


    global.EMS = EMS;

}(window));
