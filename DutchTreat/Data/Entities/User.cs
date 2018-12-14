using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel;
using Microsoft.AspNetCore.Identity;

namespace DutchTreat.Data.Entities
{
  public class User : IdentityUser
  {
        public User()
        {
            notes = new Collection<Note>();
            notes.Add(new Note { title = "note1", Date = DateTime.Now });
            notes.Add(new Note { title = "note2", Date = DateTime.Now });
        }

        public string FirstName { get; set; }
        public string LastName { get; set; }

        [NotMapped]
        public string Name { get { return FirstName + " " + LastName; } }

        public DateTime birthDate { get; set; }

        public string avator { get; set; }
    
        public string bio { get; set; }

        public ICollection<Note> notes { get; set; }

    }
    public class Note
    {
        public int id { get; set; }
        public string title { get; set; }
        public DateTime Date { get; set; }
    }
}
