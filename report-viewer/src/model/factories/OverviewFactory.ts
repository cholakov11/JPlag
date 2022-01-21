import {Overview} from "../Overview";
import {Metric} from "../Metric";
import {ComparisonListElement} from "../ComparisonListElement";

export class OverviewFactory {

    static getOverview(json: Record<string, unknown>): Overview {
        const submissionFolder = json.submission_folder_path as string
        const baseCodeFolder = ""
        const language = json.language as string
        const fileExtensions = json.file_extensions as Array<string>
        const matchSensitivity = json.match_sensitivity as number
        const submissions = json.submission_ids as Array<string>
        const dateOfExecution = json.date_of_execution as string
        const duration = json.execution_time as number as number
        const metrics = [] as Array<Metric>
        (json.metrics as Array<unknown>).forEach( (m) => {
            const metric = m as Record<string, unknown>
            const comparisons = [] as Array<ComparisonListElement>

            (metric.topComparisons as Array<Record<string, unknown>>).forEach( c => {
                const comparison: ComparisonListElement = {
                    firstSubmissionId : c.first_submission as string,
                    secondSubmissionId : c.second_submission as string,
                    matchPercentage : c.match_percentage as number
                }
                comparisons.push(comparison)
            })

            const newMetric : Metric = {
                metricName : metric.name as string,
                metricThreshold : metric.threshold as number,
                distribution : metric.distribution as Array<number>,
                comparisons : comparisons
            }
            metrics.push(newMetric)
        })

        return new Overview(
            submissionFolder,
            baseCodeFolder,
            language,
            fileExtensions,
            matchSensitivity,
            submissions,
            dateOfExecution,
            duration,
            metrics
        )
    }
}