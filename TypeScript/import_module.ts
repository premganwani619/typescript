import { PointClass } from "./export_module";
let pointobj = new PointClass(1,2);
pointobj.draw();

//In angular we dont provide relative paths for  modules that are defined in libraries because they are defined in
//diffrent way
//Example to import in angualr
//@angular/core
//libraryname/modulename 