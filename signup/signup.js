


function first_selection() {
        var who_are_you = document.getElementById('division') ;
var Staff = document.getElementById('staff') ;
var Parent = document.getElementById('parent') ;
var Student = document.getElementById('student') ;


         
        
if(who_are_you.value ==="staff") {
        Staff.classList.replace("not_selected_staff", "selected_staff");
        Parent.classList.replace("selected_parent", "not_selected_parent");
        Student.classList.replace( "selected_student", "not_selected_student");
       
}

else if(who_are_you.value ==="parent"){
            Parent.classList.replace("not_selected_parent", "selected_parent");
            Student.classList.replace( "selected_student", "not_selected_student");
            Staff.classList.replace("selected_staff", "not_selected_staff" );
           
}

else if(who_are_you.value ==="student"){
            Student.classList.replace("not_selected_student", "selected_student");
            Parent.classList.replace("selected_parent", "not_selected_parent");
            Staff.classList.replace("selected_staff", "not_selected_staff" );
          
}  

else {
       alert("you did not select the department!!");
        
}

}


function second_selection() {

var Department = document.getElementById('department') ;
var Academics = document.getElementById('academics'); 
var Accounts = document.getElementById('acounts');
var Management = document.getElementById('managements') ;



         
        
if(Department.value ==="accounts") {
        Accounts.classList.replace("not_selected_acounts", "selected_acounts");
        Academics.classList.replace("selected_academics", "not_selected_academics");
        Management.classList.replace( "selected_management", "not_selected_management");
       
}

else if(Department.value ==="academics"){
        Academics.classList.replace("not_selected_academics", "selected_academics");
        Management.classList.replace( "selected_management", "not_selected_management");
        Accounts.classList.replace("selected_acounts", "not_selected_acounts");
        
       
           
}

else if(Department.value ==="management"){
        Management.classList.replace( "not_selected_management", "selected_management");
        Accounts.classList.replace("selected_acounts", "not_selected_acounts");
        Academics.classList.replace("selected_academics", "not_selected_academics");
          
}  

else {
       alert("you did not select the department!!");
        
}
}

/*function sign_data_storage(){
document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("signup_id").addEventListener("submit", function(event) {
            event.preventDefault();
            const firstName = document.getElementById("first_name").value;
            const lastName = document.getElementById("last_name").value;
            const Phone = document.getElementById("phone").value;
            const password = document.getElementById("passWord").value;
            const dateOfBirth = document.getElementById("dob").value;
            const whoAreYou = document.getElementById("division").value;
            const employeeId = document.getElementById("employee_id").value;
            const Department = document.getElementById("department").value;
    
            // Basic client-side validation
            if (dateOfBirth && Phone) {
                // Mock signup logic
                localStorage.setItem("firstname", firstName);
                localStorage.setItem("lastname", lastName);
                localStorage.setItem("phonenumber", Phone);
                localStorage.setItem("date_of_birth", dateOfBirth);
                localStorage.setItem("who_are_you", whoAreYou);
                localStorage.setItem("personal_ID", employeeId);
                localStorage.setItem("department", Department);
                localStorage.setItem("password", password);
                document.getElementById("signupMessage").textContent = "Signup successful!";
            } else {
                document.getElementById("signupMessage").textContent = "Please fill in all fields.";
            }
        });
});
}*/
