function Skill(id, line)
{
 this.id = id;

 this.words = line.split(seperator);

 this.name = this.words[0];

 this.module = this.words[1];

 this.category = this.words[2];

 this.studyProgram = this.words[3];

 this.projects = [];

 for (var i = 4; i < this.words.length; i++)
 {
   this.projects.push(this.words[i]);
 }

 pushIfExisting(modules, this.module);
 pushIfExisting(categories, this.category);
 pushIfExisting(studyPrograms, this.studyProgram);
 for (var i = 0; i < this.projects.length; i++)
 {
   pushIfExisting(projects, this.projects[i]);
 }

}
