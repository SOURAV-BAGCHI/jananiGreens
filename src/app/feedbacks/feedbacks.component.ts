import { Component, OnInit } from '@angular/core';
import { FeedbackClientViewModel } from '../models/feedback-client-view-model';
import { Observable } from 'rxjs';
import { BookingServiceService } from '../service/booking-service.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {

  constructor(private bookingService:BookingServiceService) { }

  feedbackList:FeedbackClientViewModel[]=[];
  private feedbackList$:Observable<FeedbackClientViewModel[]>;

  isLoadingData:boolean;

  ngOnInit(): void {
    this.loadFeedbacks();
  }

  loadFeedbacks()
  {
    this.isLoadingData=true;
    this.feedbackList$=this.bookingService.getFeedbacks();
    this.feedbackList$.subscribe(res=>{
      this.feedbackList=res;
      this.isLoadingData=false;
    },
    error=>{
      this.isLoadingData=false;
    })
  }

}
