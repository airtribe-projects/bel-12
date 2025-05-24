const coursesController = require("../../src/controllers/coursesController");
const coursesModel = require("../../src/models/coursesModel");

jest.mock("../../src/models/coursesModel");


describe("Test getAllCourses", () => {
    test("Should return all courses",  () => {
        const mockCourses = [{id: 1, name:"NodeJS"}, {id: 1, name:"ReactJS"}];
        coursesModel.find.mockReturnValue(mockCourses);
       
        const result = coursesController.getAllCourse();
       
        expect(result).toBe(mockCourses);
        expect(coursesModel.find).toHaveBeenCalledTimes(1); 
    });

    it("should throw an error if course not found", async () => {
        // coursesModel.findById = jest.fn().mockImplementation((id) =>  {
        //     throw new Error("Course not found")
        // });

        // coursesModel.findById.mockRejectedValue(Error("Course not found"));
        coursesModel.findById = jest.fn().mockImplementation((id) =>  {
            throw new Error("Course not found")
        });

        expect(() => coursesController.getACourse(999)).toThrow("Course not found");
        expect(coursesModel.findById).toHaveBeenCalledWith(999);  
    });
})
