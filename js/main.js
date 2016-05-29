(function (EMS, Handlebars) {

    EMS.addEmployee({
        name: "Serge Krul",
        skill: "HTML, CSS, JS",
        type: "Teacher"
    });
    EMS.addEmployee({
        name: "Da Boss",
        skill: "Being da boss",
        type: "Manager"
    });
    EMS.addEmployee({
        name: "Da Big Boss",
        skill: "Firing People",
        type: "CEO"
    });

    renderView(EMS.getEmployees());
    $("form").addEventListener("submit", onSubmit);


    // Methods
    // *******************************************************

    function onSubmit (e) {
        e.preventDefault();
        EMS.addEmployee(getSerialized(this));
        renderView(EMS.getEmployees());
    }

    function getSerialized (form) {
        var inputs = form.querySelectorAll("[name]");
        var data = {};
        forEach(inputs, function (input) {
            data[input.name] = input.value;
        });
        return data;
    }

    function renderView (data) {
        var source = $("#employee-template").textContent;
        var template = Handlebars.compile(source);
        var employeesHtml = template(data);

        $(".Employees").innerHTML = employeesHtml;
    }

    function $ (selector) {
        return document.querySelector(selector);
    }

    function forEach (list, func) {
        return [].forEach.call(list, func);
    }

}(window.EMS, window.Handlebars));
