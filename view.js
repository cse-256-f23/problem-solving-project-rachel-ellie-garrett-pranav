// ---- Define your dialogs  and panels here ----





let tip_hide = true;
let def_hide = true;

function showTips() {
    if(tip_hide) {
        $('#tip-list').css('display', 'block');
        tip_hide = false;
    } else {
        $('#tip-list').css('display', 'none');
        tip_hide = true;
    }
}

function showDefs() {
    if(def_hide) {
        $('#def-list').css('display', 'block');
        def_hide = false;
    } else {
        $('#def-list').css('display', 'none');
        def_hide = true;
    }
}



// $('#toprightsidepanel').html(`

//     <div class=definition2>
//     <h1>Please Read the Following Before Starting:</h1>
//     <br>
//     <h2>Step 1: Take around 30 seconds making sure you truly understand the prompt. Identify the task to be completed in the prompt.
//     </h2>
//     <br>
//     <h2>Step 2: Take around 15 seconds clearly identifying the File/Folder, User & Permission Status to be worked on.  
//     </h2>
//     <br>
//     <h2>Step 3: You are now good to begin! Remember to look at the Hints.
//     </h2>
    
//     </div>

//     <div id="tips" class="definition1">
//     <h3 id="tip-header">Helpful Tips (Click to Show):</h3>
//     <div id="tip-list" style="display:none">
//         <br>

//         <div class=definition1>
//         <h3>Frequently look at the Prompt to ensure that the correct permissions are set</h3>
//         </div>

//         <div class=definition1>
//         <h3>Ensure that you are changing the permissions in the CORRECT folder</h3>
//         </div>

//         <div class=definition1>
//         <h3>Read_Execute has more functionalities than Read, so read directions carefully</h3>
//         </div>

//         <div class=definition1>
//         <h3>Sometimes, you might just be overthinking it. Keep it Simple!!!</h3>
//         </div>

//     </div>
//     </div>

//     <br>

//     <div id="defs" class=definition1>
//         <h3 id="def-header">Definitions (Click to Show):</h3>

//         <div id="def-list" style="display:none">
//         <br>
//         <div class="definition1">
//             <h2>Advanced Permissions:</h2>
//             <p>The Advanced Permissions button will take you to the advanced security settings. When you click the edit more permissions button, you will be directed to a more extensive list of permissions.</p>
//         </div>

//         <div class="definition1">
//             <h2>Permissions:</h2>
//             <p>In file systems and databases, permissions determine who can access an object (like a file or folder) and what they can do with it (read it, modify it, delete it, etc.).</p>
//         </div>

//         <div class="definition1">
//             <h2>Inheritable Permissions:</h2>
//             <p>Some systems allow permissions to be \"inherited\". This means that a file or folder can receive permissions based on the permissions of its parent folder.
//                                      So, if you have a folder that's set to be readable by a certain user, all the files and subfolders inside that folder might automatically be readable by that user too,
//                                      if they inherit permissions from the parent folder.</p>
//         </div>

//         <div class="definition1">
//             <h2>This Object's Parent:</h2>
//             <p>This refers to the folder (or sometimes another type of object) immediately above the current object in the hierarchy.
//                                     If you think of your file system as a tree, the \"parent\" of any given file or folder is the folder it's directly inside of.</p>
//         </div>

//         <div class="definition1">
//             <h2>Example Explained:</h2>
//             <p>When a user tries to do something (read, modify, delete, change permissions, …) to a file: First: Look at all of the direct (i.e. not inherited)
//                                     permissions that are set on this file for this user OR for any groups that this user is part of. if any of these are set to deny permission, then permission is denied.
//                                    (otherwise) if any of these are set to allow the permission, then the action is allowed to happen. If (a) there were no direct permissions for this user,
//                                    AND (b) inheritance is turned on for this file/folder, repeat the process above using the permissions for the parent folder. Lastly: if you have exhausted the options available via inheritance,
//                                    and still have not found any relevant permission settings, then permission is denied.</p>
//         </div>
//         </div>
//     </div>

//     <div class=definition2>
//     <h4>(Temporary Reference) User Steps:</h4>

//     <h4>Task 1:</h4>
//     <h4>Task 2: intern_permissions: 1. Click on intern_subproject. 2. Click on intern. 3.  Select 'Allow' for 'Write'. 4. Finished.</h4>
//     <h4>Task 3:</h4>
//     </div>

//     <div class=definition2>
//     <h4>(Temporary) What changes should we make?:</h4>

//     <h4> - Remove excessive wordings. It can be overloading for the user. For example, we don't need the "Hint" in 
//     the top of the dialog box. </h4>
//     <h4> - Maybe say there is no need to do anything for delete files(in case User gets confused) for Task 2.</h4>
//     <h4> - Maybe have a list of hints in the dialog box that can guide user</h4>

//     </div>

//     `);





$('#toprightsidepanel').html(`
<div id="toprightsidepanel" class="content-panel">

    <div class="section-instructions">
        <h1>Please Read the Following Before Starting:</h1>
        <ol>
            <li><strong>Understand the Prompt:</strong> Take around 30 seconds to make sure you truly understand the prompt. Identify the task to be completed.</li>
            <li><strong>Identify Details:</strong> Spend about 15 seconds clearly identifying the File/Folder, User & Permission Status to be worked on.</li>
            <li><strong>Begin the Task:</strong> You are now good to begin! Remember to look at the Hints and that you can keep reviewing the prompt.</li>
        </ol>
    </div>

    <div class="section tips">
        <button id="tip-header" class="toggle-button">Helpful Tips (Click to Show)</button>
        <div id="tip-list" class="hidden-content">
        <h2>Helpful Tips: </h2>
            <ul>
                <li>Frequently look at the Prompt to ensure that the correct permissions are set.</li>
                <li>Ensure that you are changing the permissions in the CORRECT folder.</li>
                <li>Read_Execute has more functionalities than Read, so read directions carefully.</li>
                <li>Sometimes, you might just be overthinking it. Keep it Simple!!!</li>
            </ul>
        </div>
    </div>

    <div class="section definitions">
    <button id="def-header" class="toggle-button">Definitions (Click to Show)</button>
    <div id="def-list" class="hidden-content">
    <div class="definition-item">
        <h3>Definitions: </h3>
        <dl>
        <dt><strong>Advanced Permissions:</strong></dt>
            <dd>The Advanced Permissions button will take you to the advanced security settings. When you click the edit more permissions button, you will be directed to a more extensive list of permissions.</dd>

            <dt><strong>Permissions:</strong></dt>
            <dd>In file systems and databases, permissions determine who can access an object (like a file or folder) and what they can do with it (read it, modify it, delete it, etc.).</dd>

            <dt><strong>Inheritable Permissions:</strong></dt>
            <dd>Some systems allow permissions to be "inherited". This means that a file or folder can receive permissions based on the permissions of its parent folder.</dd>

            <dt><strong>This Object's Parent:</strong></dt>
            <dd>This refers to the folder (or sometimes another type of object) immediately above the current object in the hierarchy.</dd>

            <dt><strong>Example Explained:</strong></dt>
            <dd>When a user tries to do something to a file, first look at all of the direct permissions for this user or any groups they are part of. If permission is denied, no further action is allowed.</dd>
        </dl>
    </div>
    </div>
    <br>
    <br>
<div class="section user-steps">

   <h3>Hints to help with tasks (Please Read!):</h3>
     <p><span style="color:0a5ab3">Task 1:</span> add_full_permissions: Make sure to carefully read the name of the file specified in the question! Also make sure to note which permissions need to be granted. There may be a permission that can grant all the necessary control to your user!</p>
     <br>
<p>Task 2: intern_permissions: Once again, make sure to check the name of the specified object, it can also be a folder! And make sure not to grant too many permissions, less is more!</p>
     <br>
     <p>Task 3: lost_inheritance: This one is tricky! Pay attention to the different lectures: 1. Notice that lecture 2 and 3 don’t have any users (aka the files are not accessible to them) 2. Based on the question you should add the administrator, professor, and TA 3. Now you should go into advanced permissions and allow permissions 2-10! 4. Save your changes and you have completed the assignment  </p>
 </div>


 </div>

</div>


    

  



    `);





$(document).on('click', '#tip-header', showTips);
$(document).on('click', '#def-header', showDefs);

//definitions panel
// $('#sidepanel').html(`<h1>Helpful Definitions</h1>
//                     <h2>Advanced Permissions: </h2>
//                         <p>The Advanced Permissions button will take you to the advanced secruity settings.
//                         When you click the edit more permissions button, you will directed to a more extensive list of permissions.</p>
//                     <h2>Permissions:</h2>
//                         <p>In file systems and databases, permissions determine who can access an object (like a file or folder)
//                         and what they can do with it (read it, modify it, delete it, etc.).</p>
//                     <h2>Inheritable permissions:</h2>
//                         <p>Some systems allow permissions to be \"inherited\". This means that a file or folder can receive permissions based on the permissions of its parent folder.
//                         So, if you have a folder that's set to be readable by a certain user, all the files and subfolders inside that folder might automatically be readable by that user too,
//                         if they inherit permissions from the parent folder.</p>
//                     <h2>This object's parent:</h2>
//                         <p>This refers to the folder (or sometimes another type of object) immediately above the current object in the hierarchy.
//                         If you think of your file system as a tree, the \"parent\" of any given file or folder is the folder it's directly inside of.</p>
//                     <h2>Example Explained:</h2>
//                         <p>When a user tries to do something (read, modify, delete, change permissions, …) to a file: First: Look at all of the direct (i.e. not inherited)
//                         permissions that are set on this file for this user OR for any groups that this user is part of. if any of these are set to deny permission, then permission is denied.
//                         (otherwise) if any of these are set to allow the permission, then the action is allowed to happen. If (a) there were no direct permissions for this user,
//                         AND (b) inheritance is turned on for this file/folder, repeat the process above using the permissions for the parent folder. Lastly: if you have exhausted the options available via inheritance,
//                         and still have not found any relevant permission settings, then permission is denied.</p>`);


// // ---- Display file structure ----
// $('#sidepanel').html(`
//     <div class="definitions">
//         <h1>Definitions:</h1>

//         <div class="definition1">
//             <h2>Advanced Permissions:</h2>
//             <p>The Advanced Permissions button will take you to the advanced security settings. When you click the edit more permissions button, you will be directed to a more extensive list of permissions.</p>
//         </div>

//         <div class="definition1">
//             <h2>Permissions:</h2>
//             <p>In file systems and databases, permissions determine who can access an object (like a file or folder) and what they can do with it (read it, modify it, delete it, etc.).</p>
//         </div>

//         <div class="definition1">
//             <h2>Inheritable Permissions:</h2>
//             <p>Some systems allow permissions to be \"inherited\". This means that a file or folder can receive permissions based on the permissions of its parent folder.
//                                      So, if you have a folder that's set to be readable by a certain user, all the files and subfolders inside that folder might automatically be readable by that user too,
//                                      if they inherit permissions from the parent folder.</p>
//         </div>

//         <div class="definition1">
//             <h2>This Object's Parent:</h2>
//             <p>This refers to the folder (or sometimes another type of object) immediately above the current object in the hierarchy.
//                                     If you think of your file system as a tree, the \"parent\" of any given file or folder is the folder it's directly inside of.</p>
//         </div>

//         <div class="definition1">
//             <h2>Example Explained:</h2>
//             <p>When a user tries to do something (read, modify, delete, change permissions, …) to a file: First: Look at all of the direct (i.e. not inherited)
//                                     permissions that are set on this file for this user OR for any groups that this user is part of. if any of these are set to deny permission, then permission is denied.
//                                    (otherwise) if any of these are set to allow the permission, then the action is allowed to happen. If (a) there were no direct permissions for this user,
//                                    AND (b) inheritance is turned on for this file/folder, repeat the process above using the permissions for the parent folder. Lastly: if you have exhausted the options available via inheritance,
//                                    and still have not found any relevant permission settings, then permission is denied.</p>
//         </div>
//     </div>
// `);

var style = document.createElement('style');
style.type = 'text/css';


// var css = `

// #filestructure, #toprightsidepanel {
//     display: inline-block;
//     width: 50%;
//     vertical-align: top; 
// }

// #toprightsidepanel {
//     font-family: Arial, sans-serif;
//     padding: 15px;
//     background-color: #f8f8f8;
//     border-radius: 5px;
//     box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//     z-index: 100;
// }


// #sidepanel {
//     font-family: Arial, sans-serif;
//     padding: 15px;
//     background-color: #f8f8f8;
//     border-radius: 5px;
//     box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//     display: block;
//     width: 50%;
// }


// .definitions h1 {
//     color: #333;
//     margin-bottom: 20px;
// }

// .definition {
//     background-color: #fff;
//     padding: 10px;
//     margin-bottom: 10px;
//     border-radius: 5px;
//     box-shadow: 0 1px 3px rgba(0,0,0,0.1);
//     font-size: 20px;
// }

// .definition1 {
//     background-color: #fff;
//     padding: 10px;
//     margin-bottom: 10px;
//     border-radius: 5px;
//     box-shadow: 0 1px 3px rgba(0,0,0,0.1);
// }

// .definition2 {
//     background-color: #fff;
//     padding: 10px;
//     margin-bottom: 10px;
//     border-radius: 5px;
//     box-shadow: 0 1px 3px rgba(0,0,0,0.1);
// }

// .definition h2 {
//     color: #0056b3;
//     margin-bottom: 5px;
// }

// .definition p {
//     line-height: 1.6;
//     color: #666;
// }

// `;





// var css = `

// #filestructure, #toprightsidepanel {
//     display: inline-block;
//     width: 98%;
//     vertical-align: top;
// }

// #toprightsidepanel,#sidepanel {
//     font-family: Arial, sans-serif;
//     padding: 15px;
//     background-color: #f8f8f8;
//     border-radius: 5px;
//     box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// }
// .definition, .definition1, .definition2 {
//     background-color: #fff;
//     padding: 10px;
//     margin-bottom: 10px;
//     border-radius: 5px;
//     box-shadow: 0 1px 3px rgba(0,0,0,0.1);
// }
// .definitions h1, .definition h2 {
//     color: #333;
//     margin-bottom: 20px;
// }
// .definition h2 {
//     color: #0056b3;
// }

// .definition p {
//     line-height: 1.6;
//     color: #666;
// }




// `;




// var css = `

// #filestructure, #toprightsidepanel {
//     display: inline-block;
//     width: 98%;
//     vertical-align: top;
// }

// #toprightsidepanel,#sidepanel {
//     font-family: Arial, sans-serif;
//     padding: 15px;
//     background-color: #f8f8f8;
//     border-radius: 5px;
//     box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// }

// /* Accordion styles */
// .accordion {
//     background-color: #007bff;
//     color: white;
//     cursor: pointer;
//     padding: 18px;
//     width: 100%;
//     text-align: left;
//     border: none;
//     outline: none;
//     transition: 0.4s;
//     border-radius: 4px;
//     margin-bottom: 10px; /* Added space below the button */
// }

// .active, .accordion:hover {
//     background-color: #0056b3;
// }

// .panel {
//     padding: 0 18px;
//     background-color: white;
//     max-height: 0;
//     overflow: hidden;
//     transition: max-height 0.2s ease-out;
//     border-radius: 4px;
//     box-shadow: 0 4px 8px rgba(0,0,0,0.1);
// }

// .definition, .definition1, .definition2, .panel {
//     background-color: #fff;
//     padding: 10px;
//     margin-bottom: 10px;
//     border-radius: 5px;
//     box-shadow: 0 1px 3px rgba(0,0,0,0.1);
// }

// .definitions h1, .definition h2, h1, h2, h3, h4 {
//     color: #333;
//     margin-bottom: 20px;
// }

// .definition h2, .accordion {
//     color: #0056b3;
// }

// .definition p, .panel p {
//     line-height: 1.6;
//     color: #666;
// }

// /* List styles for better readability */
// ol, ul {
//     padding-left: 20px;
// }

// ol li, ul li {
//     margin-bottom: 10px; /* Space between list items */
//     line-height: 1.6; /* Line height for readability */
// }

// /* Add media query for responsiveness if needed */
// @media (max-width: 768px) {
//     #filestructure, #toprightsidepanel {
//         width: 95%;
//     }
// }

// `;
function toggleSection(sectionId) {
    var section = $('#' + sectionId);
    section.toggle(); // This will toggle the display state between block and none
}

// You can use the same toggle function for both tips and definitions
$(document).ready(function() {
    $('#tip-header').click(function() {
        toggleSection('tip-list');
    });

    $('#def-header').click(function() {
        toggleSection('def-list');
    });
});

var css = `

#filestructure, #toprightsidepanel {
    display: inline-block;
    width: 98%;
    vertical-align: top;
}

#toprightsidepanel,#sidepanel {
    font-family: Arial, sans-serif;
    padding: 15px;
    background-color: #f8f8f8;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.accordion {
    background-color: #007bff;
    color: white;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
    border-radius: 4px;
    
    margin-bottom: 10px;
}


.active, .accordion:hover {
    background-color: #0056b3;
}

.panel {
    padding: 0 18px;
    display: none;
    background-color: #e7f3fe; /* Light blue background for the expanded content */
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}



.definition, .definition1, .definition2, .panel {
    background-color: #fff;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.definitions h1, .definition h2, h1, h2, h3, h4 {
    color: #0056b3;
    margin-bottom: 20px;
}
/* Title styling */
h1 {
  font-size: 24px; /* Increased font size for title */
  margin-bottom: 20px; /* More space after the title */
  color: #0056b3; /* Adjust color for better visibility or brand consistency */
  font-weight: bold; /* Emphasize the title */
}

/* List styling */
ol {
  font-size: 18px; /* Slightly smaller font size for list items */
  color: #333; /* Darker color for better readability */
  line-height: 1.6; /* Improve line spacing */
  margin-left: 20px; /* Space for list numbers */
}

ol li {
  margin-bottom: 10px; /* Space between list items */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  h1 {
    font-size: 20px; /* Slightly smaller font size for smaller screens */
  }

  ol {
    font-size: 16px; /* Adjust list item font size for readability on mobile */
  }
}

.definition h2, .accordion {
    color: #0056b3;
}
.definition h3, .accordion {
    color: #0056b3;
    font-weight: bold;
}

.definition p, .panel p {
    line-height: 1.6;
    color: #666;
}
.toggle-button {
    padding: 15px 30px; /* Increased padding for larger buttons */
    font-family: Arial, sans-serif;
    font-size: 20px;  /* Makes the text inside the button larger */
    font-weight: bold; 
    border: none; /* Removes the border, if there is one */
    cursor: pointer; /* Changes the mouse cursor to a pointer when it's over the button */
    outline: none; /* Removes the outline to clean up the appearance */
    border-radius: 5px; /* Optional: Rounds the corners of the button */
    background-color: #007bff; /* Changes the background color of the button */
    color: white; /* Changes the text color inside the button */
    box-shadow: 0 4px 8px rgba(0,0,0,0.2); /* Optional: Adds a subtle shadow to the button */
    transition: all 0.3s ease; /* Optional: Adds a transition effect when hovering or clicking the button */
  }


  
  /* CSS for Headers */
.instructions h1, .definitions h3 {
  font-size: 24px; /* Set the font size */
  font-weight: bold; /* Set the font weight */
  line-height: 1.2; /* Adjust the line height for better readability */
  color: #0056b3; /* Set the color */
  margin-bottom: 15px; /* Set the space below the headers */
}

/* Additional styling for consistency */
.instructions h1, .definitions h3 {

  letter-spacing: 1px; /* Optional: adjust the spacing between letters */
}

  .toggle-button:hover {
    background-color: #0056b3; /* Darkens the button slightly when hovered */
    box-shadow: 0 6px 12px rgba(0,0,0,0.3); /* Increases the shadow for a "raised" effect */
  }
  
  .toggle-button:active {
    background-color: #004085; /* Makes the button even darker when clicked */
    box-shadow: 0 2px 4px rgba(0,0,0,0.2); /* Lowers the shadow for a "pressed" effect */
  }
  

/* List styles for better readability */
ol, ul {
    padding-left: 20px;
}

ol li, ul li {
    margin-bottom: 10px;
    line-height: 1.6;
}
.hidden-content {
    display: none; /* Hidden by default */
    line-height: 1.6;
    margin-bottom: 20px;
}

/* Style for definition terms (dt) */
.definition-item dt {
  font-weight: bold;
 
  margin-top: 10px;
  padding: 5px;

  background-color: #f2f2f2; /* Light background color for the term */
  border-radius: 5px;
}

.definition-item dt, .definition-item dd {
    padding: 10px 15px; /* Consistent padding for all definition items */
    margin-bottom: 10px; /* Consistent margin for spacing out items */
    /* Other styles remain the same */
  }

  /* General text styling for readability */
body {
  font-family: 'Open Sans', Arial, sans-serif;
  color: #333; /* Dark grey for better contrast */
  background: #f8f8f8; /* Light background */
}

/* List styling for better readability */
ul {
  font-size: 16px; /* Slightly larger font size */
  line-height: 1.6; /* Increased line height */
  padding-left: 20px; /* Indent list items */
}

ul li {
  margin-bottom: 10px; /* Space between list items */
}

/* Button styling for better readability */
.toggle-button {
  font-size: 18px; /* If the font size is too large, you can reduce it */
  padding: 12px 24px; /* Optimal padding for readability and clickability */
  /* Other styles can remain the same */
}

/* Ensure that the width of text blocks is optimal */
.content-panel {
  max-width: 600px; /* Constrain the width for optimal line length */
  margin: 0 auto; /* Center the panel */
  padding: 15px; /* Add padding around the content */
}

  

/* Style for definition descriptions (dd) */
.definition-item dd {
  margin-left: 20px;
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #aaa; /* Border for the description */
  background-color: #fff; /* Different background color for the description */
  border-radius: 2px;
}

  
/* Responsive adjustments */
@media (max-width: 768px) {
    #filestructure, #toprightsidepanel {
        width: 95%;
    }
}

`;










if (style.styleSheet) {
   
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}


document.head.appendChild(style);



// (recursively) makes and returns an html element (wrapped in a jquery object) for a given file object
function make_file_element(file_obj) {
    let file_hash = get_full_path(file_obj)

    if(file_obj.is_folder) {
        let folder_elem = $(`<div class='folder' id="${file_hash}_div">
            <h3 id="${file_hash}_header">
                <span class="oi oi-folder" id="${file_hash}_icon"/> ${file_obj.filename} 
                <button class="ui-button ui-widget ui-corner-all permbutton" path="${file_hash}" id="${file_hash}_permbutton"> 
                    <span class="oi oi-lock-unlocked" id="${file_hash}_permicon"> Click Here to Change Permissions</span> 
                </button>
            </h3>
        </div>`)

        // append children, if any:
        if( file_hash in parent_to_children) {
            let container_elem = $("<div class='folder_contents'></div>")
            folder_elem.append(container_elem)
            for(child_file of parent_to_children[file_hash]) {
                let child_elem = make_file_element(child_file)
                container_elem.append(child_elem)
            }
        }
        return folder_elem
    }
    else {
        return $(`<div class='file'  id="${file_hash}_div">
            <span class="oi oi-file" id="${file_hash}_icon"/> ${file_obj.filename}
            <button class="ui-button ui-widget ui-corner-all permbutton" path="${file_hash}" id="${file_hash}_permbutton"> 
            <span class="oi oi-lock-unlocked" id="${file_hash}_permicon"> Click Here to Change Permissions</span> 
            </button>
        </div>`)
    }
}

for(let root_file of root_files) {
    let file_elem = make_file_element(root_file)
    $( "#filestructure" ).append( file_elem);    
}



// make folder hierarchy into an accordion structure
$('.folder').accordion({
    collapsible: true,
    heightStyle: 'content'
}) // TODO: start collapsed and check whether read permission exists before expanding?


// -- Connect File Structure lock buttons to the permission dialog --

// open permissions dialog when a permission button is clicked
$('.permbutton').click( function( e ) {
    // Set the path and open dialog:
    let path = e.currentTarget.getAttribute('path');
    perm_dialog.attr('filepath', path)
    perm_dialog.dialog('open')
    //open_permissions_dialog(path)

    // Deal with the fact that folders try to collapse/expand when you click on their permissions button:
    e.stopPropagation() // don't propagate button click to element underneath it (e.g. folder accordion)
    // Emit a click for logging purposes:
    emitter.dispatchEvent(new CustomEvent('userEvent', { detail: new ClickEntry(ActionEnum.CLICK, (e.clientX + window.pageXOffset), (e.clientY + window.pageYOffset), e.target.id,new Date().getTime()) }))
});


// ---- Assign unique ids to everything that doesn't have an ID ----
$('#html-loc').find('*').uniqueId() 