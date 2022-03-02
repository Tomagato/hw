import fetch from 'node-fetch';

let url =
  'https://hs-recruiting-test-resume-data.s3.amazonaws.com/allcands-full-api_hub_b1f6-acde48001122.json';
const response = await fetch(url);
const data = await response.json();

// basic array that will hold data
const candidates = [];

const print_candidates = (array) => {
  array.forEach((obj) => {
      
    console.log(obj.name, '\n');
    if(obj.experience == null){
        console.log("No past experience")
        return;
    }

    console.log(
      obj.experience.forEach((job) => {
        if (job.gap_time) {
          console.log(job.location, ' Gap in CV of ', job.gap_time, ' days', '\n');
          return;
        }
        if (job.title) {
          console.log(
            'Worked as : ',
            job.title,
            ' From ',
            job.start_date,
            ' to ',
            job.end_date,
            ' in ',
            job.location
          );
          return;
        }
      })
    );
  });
};

const create_candidates = (data) => {
  data.forEach((candidate) => {
    const name = get_name(candidate);
    const experience = get_exp(candidate);
    candidates.push({ name, experience });
  });
};

const get_name = (data) => {
  const name = data.contact_info.name.formatted_name;
  return name;
};

const get_exp = (candidate) => {
  const total_exp = [];
  if (candidate.experience.length == 0) {
    return null;
  }
  var prev_job_start_date = candidate.experience[0].start_date; // initialize first start date
  candidate.experience.forEach((job) => {
    if (job.title === undefined) {
      return;
    }
    const start_date = job.start_date;
    const end_date = job.end_date;
    const location = job.location.short_display_address;
    const title = job.title;
    total_exp.push({ title, start_date, end_date, location });

    if (
      prev_job_start_date != job.end_date &&
      prev_job_start_date != start_date
    ) {
      const gap_time = calc_gap(prev_job_start_date, end_date);

      total_exp.push({ location, gap_time });
      prev_job_start_date = start_date; // we save to check if gap exist
      return;
    }

    prev_job_start_date = start_date;
  });
  return total_exp;
};

const calc_gap = (date1, date2) => {
  const parse_date1 = date1.split('/');
  const parse_date2 = date2.split('/');
  const newDate1 = new Date(parse_date1.join(' '));
  const newDate2 = new Date(parse_date2.join(' '));

  var Difference_In_Time = newDate1.getTime() - newDate2.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  if (Difference_In_Days < 0) {
    return 1;
  }
  return parseInt(Difference_In_Days);
};

create_candidates(data);
print_candidates(candidates);
